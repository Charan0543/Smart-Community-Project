const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dbPath = path.resolve(__dirname, 'database.json');

// Serve Frontend Static Files
app.use(express.static(__dirname));

// Helper to interact with DB
const getDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const saveDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 4));

// ==========================================
// ROUTES: AUTHENTICATION
// ==========================================

app.post('/api/auth/register', (req, res) => {
    const { name, email, phone, flat, password, role, joinType, communityCode } = req.body;
    const db = getDB();

    // Emulate Unique Email Validation
    if (db.users.some(u => u.email === email)) {
        return res.status(400).json({ error: 'Email already exists globally.' });
    }

    if (role === 'admin' && joinType === 'create') {
        if (db.communities.includes(communityCode)) {
            return res.status(400).json({ error: 'Community Code is already registered.' });
        }
        
        db.communities.push(communityCode);
        const newUser = {
            id: 'usr-' + Date.now(),
            name, email, phone, flat: flat || null, password, 
            role: 'superadmin', status: 'approved', communityCode
        };
        db.users.push(newUser);
        saveDB(db);
        
        return res.status(201).json({ success: true, message: 'Community successfully synthesized!' });

    } else {
        if (!db.communities.includes(communityCode)) {
            return res.status(400).json({ error: 'Invalid Community Code parameter.' });
        }

        const newUser = {
            id: 'req-' + Date.now(),
            name, email, phone, flat: flat || null, password,
            role, status: 'pending', communityCode
        };
        db.users.push(newUser);
        saveDB(db);

        return res.status(201).json({ success: true, message: 'Registration submitted into approval queue!' });
    }
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const db = getDB();

    const user = db.users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(401).json({ error: 'Invalid authentication credentials.' });

    if (user.status === 'pending') {
        return res.status(403).json({ error: 'Account is strictly under approval queue.' });
    }

    // Clone and sanitize user object
    const userSafe = { ...user };
    delete userSafe.password;
    
    res.json({ success: true, user: userSafe });
});

// ==========================================
// ROUTES: APPROVAL NETWORKS
// ==========================================

app.get('/api/users/pending', (req, res) => {
    const { communityCode } = req.query;
    if(!communityCode) return res.status(400).json({error: "Require bounds"});

    const db = getDB();
    const pending = db.users.filter(u => u.communityCode === communityCode && u.status === 'pending');
    
    // Sanitize output
    pending.forEach(r => delete r.password);
    res.json(pending);
});

app.get('/api/users/directory', (req, res) => {
    const { communityCode } = req.query;
    if(!communityCode) return res.status(400).json({error: "Require bounds"});

    const db = getDB();
    const approved = db.users.filter(u => u.communityCode === communityCode && u.status === 'approved');
    
    // Sanitize output
    approved.forEach(r => delete r.password);
    res.json(approved);
});

app.post('/api/users/approve', (req, res) => {
    const { id } = req.body;
    const db = getDB();
    const userIndex = db.users.findIndex(u => u.id === id);
    
    if (userIndex > -1) {
        db.users[userIndex].status = 'approved';
        saveDB(db);
        return res.json({ success: true, message: 'Account securely approved!' });
    }
    return res.status(404).json({ error: 'Requester ID bounds not found.' });
});

app.post('/api/users/reject', (req, res) => {
    const { id } = req.body;
    const db = getDB();
    db.users = db.users.filter(u => u.id !== id);
    saveDB(db);
    res.json({ success: true, message: 'Account effectively rejected!' });
});

// ==========================================
// ROUTES: UNIVERSAL DATA SYNC
// ==========================================

app.get('/api/dashboard/:communityCode', (req, res) => {
    const { communityCode } = req.params;
    const db = getDB();

    const payload = {
        announcements: (db.announcements || []).filter(x => x.communityCode === communityCode),
        events: (db.events || []).filter(x => x.communityCode === communityCode),
        complaints: (db.complaints || []).filter(x => x.communityCode === communityCode),
        alerts: (db.alerts || []).filter(x => x.communityCode === communityCode),
        transactions: (db.transactions || []).filter(x => x.communityCode === communityCode),
        eventRegistrations: (db.eventRegistrations || []).filter(x => x.communityCode === communityCode),
        contacts: (db.contacts || []).filter(x => x.communityCode === communityCode || !x.communityCode)
    };

    res.json(payload);
});

app.post('/api/data/:type', (req, res) => {
    const { type } = req.params;
    const payload = req.body;
    const db = getDB();

    // Ensure array exists
    if (!db[type]) db[type] = [];
    
    // Add unique server timestamp explicitly
    payload.timestamp = Date.now();
    
    // Push securely
    db[type].unshift(payload);
    saveDB(db);

    res.json({ success: true, message: 'Saved successfully.' });
});

app.put('/api/data/:type/:id', (req, res) => {
    const { type, id } = req.params;
    const updates = req.body;
    const db = getDB();

    if (!db[type]) return res.status(404).json({ error: 'Data array not found.' });

    const index = db[type].findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({ error: 'Object ID not found.' });

    // Merge updates selectively preserving other data
    db[type][index] = { ...db[type][index], ...updates };
    saveDB(db);

    res.json({ success: true, message: 'Updated successfully.' });
});

app.delete('/api/data/:type/:id', (req, res) => {
    const { type, id } = req.params;
    const db = getDB();

    if (!db[type]) return res.status(404).json({ error: 'Data array not found.' });

    db[type] = db[type].filter(item => String(item.id) !== String(id));
    saveDB(db);

    res.json({ success: true, message: 'Deleted successfully.' });
});

app.listen(PORT, () => {
    console.log(`Smart JSON Express live at http://localhost:${PORT}`);
});

