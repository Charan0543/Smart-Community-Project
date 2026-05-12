// Dummy Data Store
const DATA = {
    complaints: [
        { id: 'CMP001', name: 'John Doe', flat: 'A-101', category: 'Plumbing', title: 'Leaking Pipe', desc: 'Pipe in kitchen is leaking continuously.', status: 'Pending', date: '2023-10-25', timestamp: Date.now() - 86400000, votes: 2, votedBy: [], responses: [{adminName: 'Admin User', text: 'We are looking into this today.', date: new Date().toLocaleTimeString()}], communityCode: 'SMART2026' },
        { id: 'CMP002', name: 'Alice Smith', flat: 'B-205', category: 'Electrical', title: 'Hallway Light', desc: 'Corridor light is flickering.', status: 'Resolved', date: '2023-10-20', timestamp: Date.now() - 172800000, votes: 5, votedBy: [], responses: [], communityCode: 'SMART2026' },
        { id: 'CMP003', name: 'Rahul M', flat: 'C-302', category: 'Security', title: 'Main Gate Issue', desc: 'Main gate sometimes does not lock automatically.', status: 'Pending', date: '2023-10-26', timestamp: Date.now() - 43200000, votes: 0, votedBy: [], responses: [], communityCode: 'SMART2026' }
    ],
    announcements: [
        { id: 1, title: 'Annual General Meeting', date: '2023-11-05', desc: 'All residents are requested to attend the AGM at the clubhouse.', communityCode: 'SMART2026' },
        { id: 2, title: 'Water Supply Maintenance', date: '2023-10-30', desc: 'Water supply will be affected from 10 AM to 2 PM due to tank cleaning.', communityCode: 'SMART2026' }
    ],
    events: [
        { id: 1, name: 'Diwali Celebration', date: '2023-11-12', time: '18:00', location: 'Central Courtyard', desc: 'Join us for a grand Diwali celebration with food and fireworks!', showRegBtn: true, communityCode: 'SMART2026' },
        { id: 2, name: 'Yoga Workshop', date: '2023-11-15', time: '07:00', location: 'Clubhouse', desc: 'Free yoga session for all age groups.', showRegBtn: true, communityCode: 'SMART2026' }
    ],
    directory: [
        { id: 1, name: 'John Doe', flat: 'A-101', email: 'john@example.com', phone: '555-0101', contact: 'john@example.com / 555-0101', moveIn: '2020-01-15', status: 'Owner', role: 'resident', communityCode: 'SMART2026' },
        { id: 2, name: 'Alice Smith', flat: 'B-205', email: 'alice@example.com', phone: '555-0205', contact: 'alice@example.com / 555-0205', moveIn: '2021-06-10', status: 'Tenant', role: 'resident', communityCode: 'SMART2026' },
        { id: 3, name: 'Rahul M', flat: 'C-302', email: 'rahul@example.com', phone: '555-0302', contact: 'rahul@example.com / 555-0302', moveIn: '2019-11-20', status: 'Owner', role: 'resident', communityCode: 'SMART2026' },
        { id: 4, name: 'Priya K', flat: 'D-405', email: 'priya@example.com', phone: '555-0405', contact: 'priya@example.com / 555-0405', moveIn: '2022-03-05', status: 'Tenant', role: 'resident', communityCode: 'SMART2026' },
        { id: 5, name: 'Admin User', flat: 'Office 1', email: 'admin@example.com', phone: '555-9999', contact: 'admin@example.com / 555-9999', moveIn: '2015-01-01', status: 'Staff', role: 'admin', communityCode: 'SMART2026' },
        { id: 6, name: 'Super Admin', flat: 'Office 2', email: 'super@example.com', phone: '555-8888', contact: 'super@example.com / 555-8888', moveIn: '2015-01-01', status: 'Staff', role: 'superadmin', communityCode: 'SMART2026' }
    ],
    communityCode: 'SMART2026',
    contacts: [
        { id: 1, title: 'Email Support', info: 'support@smartcommunity.com', icon: 'fa-envelope' },
        { id: 2, title: 'Phone / Emergency', info: '+1 (555) 123-4567', icon: 'fa-phone' },
        { id: 3, title: 'Management Office', info: 'Clubhouse, Ground Floor | Mon-Fri, 9:00 AM - 6:00 PM', icon: 'fa-location-dot' }
    ],
    transactions: [
        { id: 'TXN1001', name: 'John Doe', flat: 'A-101', date: '2023-10-25', category: 'Maintenance', amount: 5000, txnId: 'BANK992831', screenshot: '', status: 'Approved', communityCode: 'SMART2026' },
        { id: 'TXN1002', name: 'Alice Smith', flat: 'B-205', date: '2023-10-24', category: 'Event Fee', amount: 350, txnId: 'BANK992832', screenshot: '', status: 'Pending', communityCode: 'SMART2026' }
    ],
    alerts: [
        { type: 'fire', title: 'Fire Drill Scheduled', time: '2 hours ago', desc: 'Please participate in the fire drill tomorrow at 4 PM.', communityCode: 'SMART2026' },
        { type: 'security', title: 'Visitor Alert', time: '1 day ago', desc: 'Unauthorized vehicles parked in guest parking will be towed.', communityCode: 'SMART2026' },
        { type: 'water', title: 'Water Leakage', time: '3 days ago', desc: 'Leakage reported in Block B basement. Maintenance team dispatched.', communityCode: 'SMART2026' }
    ],
    fundDescription: "Please transfer your monthly maintenance using the provided QR codes.",
    qrCodes: [
        { id: 1, serial: 'QR-MAINT-001', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg' }
    ],
    eventRegistrations: [],
    communities: ['SMART2026'],
    users: [
        { id: 'usr-1', name: 'Super Admin', email: 'admin@example.com', password: '123', role: 'superadmin', status: 'approved', communityCode: 'SMART2026' }
    ],
    pendingApprovals: []
};

// Application State
const state = {
    selectedRole: null, // 'admin' or 'resident'
    currentUser: null,
    currentView: 'dashboard'
};

// Navigation Items Configuration
const NAV_ITEMS = {
    superadmin: [
        { id: 'dashboard', icon: 'fa-table-columns', label: 'Dashboard' },
        { id: 'complaints', icon: 'fa-clipboard-list', label: 'Complaints' },
        { id: 'announcements', icon: 'fa-bullhorn', label: 'Announcements' },
        { id: 'events', icon: 'fa-calendar-day', label: 'Events' },
        { id: 'funds', icon: 'fa-wallet', label: 'Fund Management' },
        { id: 'alerts', icon: 'fa-triangle-exclamation', label: 'Alerts' },
        { id: 'directory', icon: 'fa-address-book', label: 'Directory' },
        { id: 'contact', icon: 'fa-headset', label: 'Support' }
    ],
    admin: [
        { id: 'dashboard', icon: 'fa-table-columns', label: 'Dashboard' },
        { id: 'complaints', icon: 'fa-clipboard-list', label: 'Complaints' },
        { id: 'announcements', icon: 'fa-bullhorn', label: 'Announcements' },
        { id: 'events', icon: 'fa-calendar-day', label: 'Events' },
        { id: 'funds', icon: 'fa-wallet', label: 'Fund Management' },
        { id: 'alerts', icon: 'fa-triangle-exclamation', label: 'Alerts' },
        { id: 'directory', icon: 'fa-address-book', label: 'Directory' },
        { id: 'contact', icon: 'fa-headset', label: 'Support' }
    ],
    resident: [
        { id: 'dashboard', icon: 'fa-table-columns', label: 'Dashboard' },
        { id: 'complaints', icon: 'fa-clipboard-list', label: 'Register Complaint' },
        { id: 'announcements', icon: 'fa-bullhorn', label: 'Announcements' },
        { id: 'events', icon: 'fa-calendar-day', label: 'Events' },
        { id: 'funds', icon: 'fa-wallet', label: 'Fund Management' },
        { id: 'alerts', icon: 'fa-triangle-exclamation', label: 'Alerts' },
        { id: 'contact', icon: 'fa-headset', label: 'Contact Support' },
        { id: 'directory', icon: 'fa-address-book', label: 'Directory' }
    ]
};

// Main App Controller
const app = {
    
    init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 60000);
    },

    // -------------------------------------------------------------
    // AUTHENTICATION WIZARD & REGISTRATION ENGINE
    // -------------------------------------------------------------
    authNavigate(screenId) {
        document.querySelectorAll('#auth-landing-screen, #auth-login-screen, #auth-role-screen, #auth-admin-choice-screen, #auth-register-screen').forEach(el => el.classList.add('hidden'));
        document.getElementById(screenId).classList.remove('hidden');
    },

    setRegisterRole(role) {
        state.selectedRole = role; // 'admin' or 'resident'
        if(role === 'admin') {
            this.authNavigate('auth-admin-choice-screen');
        } else {
            this.authGoToRegisterForm('join'); // Residents always 'join'
        }
    },

    setAdminJoinType(type) {
        // type = 'create' (becomes superadmin) or 'join' (becomes admin pending)
        this.authGoToRegisterForm(type);
    },

    authGoToRegisterForm(joinType) {
        state.joinType = joinType; 
        document.getElementById('register-form').reset();
        
        // Hide/Show fields dynamically
        if(state.selectedRole === 'resident') {
            document.getElementById('reg-flat-group').classList.remove('hidden');
            document.getElementById('reg-flat').required = true;
            document.getElementById('reg-community-label').innerText = "Community Code";
            document.getElementById('reg-community-hint').innerText = "Enter the code provided by your Admin.";
            document.getElementById('reg-title-text').innerText = "Resident Registration";
        } else {
            document.getElementById('reg-flat-group').classList.add('hidden');
            document.getElementById('reg-flat').required = false;
            
            if(joinType === 'create') {
                document.getElementById('reg-community-label').innerText = "Create New Community Code";
                document.getElementById('reg-community-hint').innerText = "Must be a unique code.";
                document.getElementById('reg-title-text').innerText = "Super Admin Registration";
            } else {
                document.getElementById('reg-community-label').innerText = "Existing Community Code";
                document.getElementById('reg-community-hint').innerText = "Enter your community's private code.";
                document.getElementById('reg-title-text').innerText = "Admin Registration";
            }
        }
        
        this.authNavigate('auth-register-screen');
    },

    authNavigateBackRegister() {
        if(state.selectedRole === 'admin') this.authNavigate('auth-admin-choice-screen');
        else this.authNavigate('auth-role-screen');
    },

    async submitRegistration(e) {
        e.preventDefault();
        
        const name = document.getElementById('reg-name').value.trim();
        const phone = document.getElementById('reg-phone').value.trim();
        const flat = document.getElementById('reg-flat').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const pass = document.getElementById('reg-password').value;
        const confirm = document.getElementById('reg-confirm-password').value;
        const commCode = document.getElementById('reg-community-code').value.trim();

        if(pass !== confirm) {
            this.showToast('Passwords do not match.', 'error');
            return;
        }

        try {
            const payload = {
                name, email, phone, flat, password: pass, 
                role: state.selectedRole,
                joinType: state.joinType,
                communityCode: commCode
            };

            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await response.json();

            if (!response.ok) {
                this.showToast(data.error || 'Registration failed.', 'error');
                return;
            }

            this.showToast(data.message, 'success');
            this.authNavigate('auth-landing-screen');
        } catch (err) {
            this.showToast('Server connection failed.', 'error');
        }
    },

    async handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const pass = document.getElementById('login-password').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password: pass })
            });
            const data = await response.json();

            if (!response.ok) {
                this.showToast(data.error || 'Login failed.', 'error');
                return;
            }

            state.currentUser = data.user;
            this.setupDashboard();
            
            document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
            document.getElementById('dashboard-screen').classList.remove('hidden');
            
            this.showToast('Login successful! Welcome back.', 'success');
        } catch (err) {
            this.showToast('Server connection failed.', 'error');
        }
    },

    logout() {
        state.currentUser = null;
        state.selectedRole = null;
        state.joinType = null;
        
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        document.getElementById('auth-landing-screen').classList.remove('hidden');
        document.getElementById('login-form').reset();
        
        this.showToast('Logged out successfully.', 'info');
    },

    // -------------------------------------------------------------
    // DASHBOARD & NAVIGATION
    // -------------------------------------------------------------
    async setupDashboard() {
        const user = state.currentUser;
        
        // Update User Profile UI
        document.getElementById('sidebar-user-name').innerText = user.name;
        document.getElementById('sidebar-user-role').innerText = user.roleName;
        document.getElementById('welcome-name').innerText = user.name;

        // Apply Role-Based Access Rules
        const adminElements = document.querySelectorAll('.admin-only');
        adminElements.forEach(el => {
            if (user.role === 'resident') {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
        });

        const residentElements = document.querySelectorAll('.resident-only');
        residentElements.forEach(el => {
            if (user.role !== 'resident') {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
        });

        const superAdminElements = document.querySelectorAll('.superadmin-only');
        superAdminElements.forEach(el => {
            if (user.role !== 'superadmin') {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
        });

        // Generate Sidebar Navigation
        this.renderSidebar();
        
        // PULL ALL DYNAMIC DATA AUTOMATICALLY
        try {
            const res = await fetch(`http://localhost:5000/api/dashboard/${user.communityCode}`);
            const payload = await res.json();
            
            // Map payloads to existing variables structurally
            DATA.announcements = payload.announcements || [];
            DATA.events = payload.events || [];
            DATA.complaints = payload.complaints || [];
            DATA.alerts = payload.alerts || [];
            DATA.transactions = payload.transactions || [];
            DATA.eventRegistrations = payload.eventRegistrations || [];
            
            const serverContacts = payload.contacts || [];
            const defaultContacts = DATA.contacts.filter(c => !c.communityCode);
            DATA.contacts = [...defaultContacts, ...serverContacts];
        } catch(e) {
            console.log('Failed DB Fetch:', e);
        }

        // Render Initial Data
        this.renderDashboardStats();
        this.renderComplaintsChat();
        this.renderAnnouncements();
        this.renderEvents();
        this.renderEventRegistrations();
        this.renderTransactions();
        this.renderAlerts();
        this.renderDirectory();
        this.renderContacts();
        this.renderFundDescription();
        this.renderQRCodes();
        this.renderApprovalQueue();

        // Navigate to default view
        this.navigateTo('dashboard');
    },

    async renderApprovalQueue() {
        const user = state.currentUser;
        // Only Admin/SuperAdmin see approvals
        if (!user || user.role === 'resident') return;

        const tbody = document.getElementById('approval-queue-table');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        try {
            const response = await fetch(`http://localhost:5000/api/users/pending?communityCode=${user.communityCode}`);
            const pending = await response.json();
            
            let visibleCount = 0;

            pending.forEach(req => {
                // Admin cannot approve SuperAdmin or another Admin natively in this setup.
                if (user.role === 'admin' && (req.role === 'admin' || req.role === 'superadmin')) return;

                visibleCount++;
                
                let badgeClass = req.role === 'admin' ? 'bg-orange' : 'bg-blue';
                let roleLabel = req.role === 'admin' ? 'Administrator' : 'Resident';
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><span class="badge ${badgeClass}">${roleLabel}</span></td>
                    <td><strong>${req.name}</strong></td>
                    <td>${req.email}<br><small class="text-muted"><i class="fa-solid fa-phone"></i> ${req.phone}</small></td>
                    <td>${req.flat || '-'}</td>
                    <td>
                        <button class="btn btn-sm btn-primary me-2" onclick="app.approveUser('${req.id}')"><i class="fa-solid fa-check"></i></button>
                        <button class="btn btn-sm btn-danger" onclick="app.rejectUser('${req.id}')"><i class="fa-solid fa-xmark"></i></button>
                    </td>
                `;
                tbody.appendChild(tr);
            });

            if (visibleCount === 0) {
                tbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted py-4">No pending approvals at the moment.</td></tr>`;
            }
        } catch(err) {
            console.error('Approval Queue Load Error:', err);
        }
    },

    async approveUser(reqId) {
        try {
            const response = await fetch('http://localhost:5000/api/users/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: reqId })
            });
            const data = await response.json();
            
            if (response.ok) {
                this.showToast('Account has been successfully approved!', 'success');
                this.renderApprovalQueue();
                if(state.currentView === 'directory') this.renderDirectory();
            } else {
                this.showToast(data.error, 'error');
            }
        } catch(err) {
            this.showToast('Server update failed.', 'error');
        }
    },

    async rejectUser(reqId) {
        try {
            const response = await fetch('http://localhost:5000/api/users/reject', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: reqId })
            });
            const data = await response.json();
            
            if (response.ok) {
                this.showToast('Request has been rejected.', 'info');
                this.renderApprovalQueue();
            }
        } catch(err) {
             this.showToast('Server update failed.', 'error');
        }
    },

    renderSidebar() {
        const menu = document.getElementById('nav-menu');
        menu.innerHTML = '';
        const items = NAV_ITEMS[state.currentUser.role];
        
        items.forEach(item => {
            const li = document.createElement('li');
            li.id = `nav-${item.id}`;
            li.innerHTML = `
                <a href="#" onclick="app.navigateTo('${item.id}'); return false;">
                    <i class="fa-solid ${item.icon}"></i> ${item.label}
                </a>
            `;
            menu.appendChild(li);
        });
    },

    navigateTo(viewId) {
        // Update Views
        document.querySelectorAll('.content-view').forEach(el => {
            el.classList.remove('active');
            el.classList.add('hidden');
        });
        
        const targetView = document.getElementById(`view-${viewId}`);
        if(targetView) {
            targetView.classList.remove('hidden');
            targetView.classList.add('active');
        }
        
        // Update Nav Hightlight
        document.querySelectorAll('.sidebar-nav li').forEach(el => el.classList.remove('active'));
        const activeNav = document.getElementById(`nav-${viewId}`);
        if(activeNav) activeNav.classList.add('active');

        // Update Title
        const items = NAV_ITEMS[state.currentUser.role];
        const pageInfo = items.find(i => i.id === viewId);
        document.getElementById('page-title').innerText = pageInfo ? pageInfo.label : 'Dashboard';

        // Close Sidebar on Mobile
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('active');
        }
        
        state.currentView = viewId;
    },

    toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    },

    updateClock() {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' };
        let dateString = now.toLocaleDateString('en-US', options);
        const dateEl = document.getElementById('current-date');
        if(dateEl) dateEl.innerText = dateString;
    },

    // -------------------------------------------------------------
    // DATA RENDERING (COMMUNITY ISOLATED)
    // -------------------------------------------------------------
    renderDashboardStats() {
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        
        // Scope variables strictly to community ID mapping
        const scopedComplaints = DATA.complaints.filter(c => c.communityCode === commCode);
        const scopedEvents = DATA.events.filter(e => e.communityCode === commCode);
        const scopedAnnouncements = DATA.announcements.filter(a => a.communityCode === commCode);

        document.getElementById('stat-total-complaints').innerText = scopedComplaints.length;
        document.getElementById('stat-pending-complaints').innerText = scopedComplaints.filter(c => c.status === 'Pending').length;
        document.getElementById('stat-resolved-complaints').innerText = scopedComplaints.filter(c => c.status === 'Resolved').length;
        document.getElementById('stat-upcoming-events').innerText = scopedEvents.length;

        // Dashboard Recent Announcements
        const dashAnn = document.getElementById('dashboard-announcements');
        if (dashAnn) {
            dashAnn.innerHTML = scopedAnnouncements.slice(0, 3).map(a => `
                <li>
                    <div class="activity-icon"><i class="fa-solid fa-bullhorn"></i></div>
                    <div class="activity-content">
                        <h5>${a.title}</h5>
                        <p>${a.date}</p>
                    </div>
                </li>
            `).join('');
            if (scopedAnnouncements.length === 0) {
                dashAnn.innerHTML = `<li class="text-muted"><div class="activity-content"><p>No announcements in this community yet.</p></div></li>`;
            }
        }

        // Dashboard Priority-wise Complaints List
        const dashComplaints = document.getElementById('dashboard-complaints-table');
        if(dashComplaints) {
            let visibleComplaints = scopedComplaints;
            if (state.currentUser.role === 'resident') {
                visibleComplaints = DATA.complaints.filter(c => c.name === state.currentUser.name);
            }
            
            const sortedPriority = [...visibleComplaints].sort((a,b) => this.calculatePriority(b) - this.calculatePriority(a));

            dashComplaints.innerHTML = sortedPriority.slice(0, 10).map(c => {
                const priorityVal = this.calculatePriority(c);
                const isHigh = priorityVal > 10000;
                const priorityBadge = `<span class="status-badge ${isHigh ? 'bg-red text-red' : 'bg-blue text-blue'}"><i class="fa-solid fa-arrow-trend-up"></i> ${priorityVal >= 1000 ? (priorityVal/1000).toFixed(1)+'k' : Math.floor(priorityVal)}</span>`;
                
                const responsesHtml = (c.responses || []).map(r => 
                    `<div style="font-size:0.8rem; margin-bottom:4px; padding:4px; background:rgba(0,0,0,0.03); border-radius:4px;">
                        <strong class="text-primary">${r.adminName}:</strong> ${r.text}
                    </div>`
                ).join('') || '<span class="text-muted" style="font-size:0.85rem;">No responses yet</span>';

                return `
                    <tr>
                        <td>${priorityBadge}</td>
                        <td>
                            <div style="font-weight:600;">${c.name}</div>
                            <div class="text-muted" style="font-size:0.85rem;">${c.flat}</div>
                        </td>
                        <td>
                            <div style="font-weight:600; font-size:0.9rem;">[${c.category}] ${c.title}</div>
                            <div style="font-size:0.85rem;" class="text-muted">${c.desc}</div>
                        </td>
                        <td>${responsesHtml}</td>
                        <td><span class="status-badge ${this.getStatusClass(c.status)}">${c.status}</span></td>
                    </tr>
                `;
            }).join('');
            
            if (sortedPriority.length === 0) {
                dashComplaints.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-4">No active complaints found.</td></tr>';
            }
        }
    },

    calculatePriority(c) {
        const timeActiveMs = Date.now() - (c.timestamp || Date.now());
        const timeScore = timeActiveMs / 1000;
        return timeScore + ((c.votes || 0) * 10000); 
    },

    renderComplaintsChat() {
        const chatList = document.getElementById('complaint-chat-list');
        if(!chatList) return;

        // Strict Community Isolation
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        const scopedComplaints = DATA.complaints.filter(c => c.communityCode === commCode);

        // Sort complaints primarily by Priority
        const sorted = [...scopedComplaints].sort((a,b) => this.calculatePriority(b) - this.calculatePriority(a));

        chatList.innerHTML = sorted.map(c => {
            const isResident = state.currentUser.role === 'resident';
            const isOwn = state.currentUser.name === c.name;
            let dirClass = '';
            
            // Resident vs Admin alignment
            if(isResident) {
                dirClass = isOwn ? 'chat-right' : 'chat-left';
            } else {
                dirClass = 'chat-left';
            }

            const bubbleStatus = c.status === 'Resolved' ? 'bubble-resolved' : 'bubble-pending';
            
            // Build response bubbles
            const replyDirClass = isResident ? 'chat-left' : 'chat-right';
            const responsesHtml = (c.responses || []).map(r => `
                <div class="chat-bubble-container ${replyDirClass} mt-2">
                    <div class="chat-bubble bubble-admin-reply">
                        <div class="replied-to-box">
                            Replying to <strong>${c.name}</strong> (${c.category})
                        </div>
                        <div class="chat-author">${r.adminName} <span style="font-size: 0.75rem; opacity: 0.8; text-transform: capitalize;">[${r.adminRole || 'Admin'}]</span></div>
                        <div class="chat-text">${r.text}</div>
                        <div class="chat-meta chat-time">${r.date}</div>
                    </div>
                </div>
            `).join('');

            // Controls
            let controlsHtml = '';
            const voted = (c.votedBy || []).includes(state.currentUser.name);
            
            if (isResident) {
                controlsHtml = `
                    <div class="chat-control-bar">
                        <button class="vote-btn ${voted ? 'voted' : ''}" onclick="app.addVote('${c.id}')"><i class="fa-solid fa-thumbs-up"></i> ${c.votes || 0}</button>
                    </div>
                `;
            } else {
                controlsHtml = `
                    <div class="chat-control-bar" style="justify-content: flex-start; margin-top:0.5rem; gap:10px; align-items:center;">
                        <button class="btn btn-sm btn-outline text-blue ${voted ? 'bg-blue text-white' : ''}" onclick="app.addVote('${c.id}')"><i class="fa-solid fa-thumbs-up"></i> ${c.votes || 0}</button>
                        <button class="btn btn-sm btn-outline text-primary" onclick="app.setReplyTarget('${c.id}', '${c.name.replace(/'/g,"\\'").replace(/"/g,"&quot;")}')">Reply</button>
                        <button class="btn btn-sm btn-outline ${c.status==='Resolved'?'bg-green':''}" onclick="app.toggleComplaintStatus('${c.id}')">
                            ${c.status === 'Resolved' ? '<i class="fa-solid fa-check"></i> Resolved' : 'Mark Resolved'}
                        </button>
                    </div>
                `;
            }

            return `
                <div class="chat-bubble-container ${dirClass}">
                    <div class="chat-bubble ${bubbleStatus}">
                        <div class="chat-author">${c.name} | ${c.flat}</div>
                        <div style="font-weight:bold; font-size: 0.9rem; margin-bottom:0.25rem;">[${c.category}] ${c.title}</div>
                        <div class="chat-text">${c.desc}</div>
                        <div class="chat-meta">
                            <span>#${c.id}</span>
                            <span class="chat-time">${c.date}</span>
                        </div>
                        ${controlsHtml}
                    </div>
                </div>
                ${responsesHtml}
            `;
        }).join('');
        
        // Auto scroll to bottom
        setTimeout(() => {
            chatList.scrollTop = chatList.scrollHeight;
        }, 50);
    },

    async addVote(id) {
        const c = DATA.complaints.find(x => x.id === id);
        if(!c) return;
        
        if(c.name === state.currentUser.name) {
            this.showToast('You cannot vote for your own complaint!', 'error');
            return; 
        }
        
        c.votedBy = c.votedBy || [];
        if(c.votedBy.includes(state.currentUser.name)) {
            c.votedBy = c.votedBy.filter(n => n !== state.currentUser.name);
            c.votes = Math.max(0, (c.votes || 0) - 1);
        } else {
            c.votedBy.push(state.currentUser.name);
            c.votes = (c.votes || 0) + 1;
        }

        try {
            await fetch(`http://localhost:5000/api/data/complaints/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ votes: c.votes, votedBy: c.votedBy })
            });
        } catch(e) { console.error('Vote failed', e); }
        
        this.renderComplaintsChat();
        this.renderDashboardStats();
    },

    setReplyTarget(id, name) {
        document.getElementById('chat-reply-id').value = id;
        document.getElementById('reply-target-name').innerText = name;
        document.getElementById('reply-target-badge').classList.remove('hidden');
        document.getElementById('chat-input-text').focus();
    },
    
    cancelReply() {
        document.getElementById('chat-reply-id').value = '';
        document.getElementById('reply-target-badge').classList.add('hidden');
    },

    async sendChatMessage() {
        const input = document.getElementById('chat-input-text');
        const text = input.value.trim();
        if(!text) return;
        
        const isResident = state.currentUser.role === 'resident';
        
        if (isResident) {
            let userFlat = 'A-101';
            const userDir = DATA.directory.find(d => d.name === state.currentUser.name && d.role === 'resident');
            if(userDir) userFlat = userDir.flat;

            const newComplaint = {
                id: 'CMP00' + (DATA.complaints.length + 1),
                name: state.currentUser.name,
                flat: userFlat, 
                category: 'General',
                title: 'Resident Report',
                desc: text,
                status: 'Pending',
                date: new Date().toISOString().split('T')[0],
                timestamp: Date.now(),
                votes: 0,
                votedBy: [],
                responses: [],
                communityCode: state.currentUser.communityCode
            };
            
            try {
                await fetch('http://localhost:5000/api/data/complaints', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newComplaint)
                });
                DATA.complaints.push(newComplaint);
            } catch(e) { console.error('Chat error', e); }

        } else {
            const targetId = document.getElementById('chat-reply-id').value;
            if(!targetId) {
                this.showToast('Please select a complaint to reply to first!', 'error');
                return;
            }
            const c = DATA.complaints.find(x => x.id === targetId);
            if(c) {
                c.responses = c.responses || [];
                c.responses.push({
                    adminName: state.currentUser.name,
                    adminRole: state.currentUser.role,
                    text: text,
                    date: new Date().toLocaleTimeString()
                });
                try {
                    await fetch(`http://localhost:5000/api/data/complaints/${targetId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ responses: c.responses })
                    });
                } catch(e) { console.error('Reply failed', e); }
            }
            this.cancelReply();
        }
        
        input.value = '';
        this.renderComplaintsChat();
        this.renderDashboardStats();
    },

    async toggleComplaintStatus(id) {
        const c = DATA.complaints.find(x => x.id === id);
        if(c) {
            c.status = c.status === 'Resolved' ? 'Pending' : 'Resolved';
            
            try {
                await fetch(`http://localhost:5000/api/data/complaints/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: c.status })
                });
            } catch (e) { console.error('Status fail', e); }

            this.showToast(`Complaint ${id} marked as ${c.status}`, 'success');
            this.renderComplaintsChat();
            this.renderDashboardStats();
        }
    },

    renderAnnouncements() {
        const container = document.getElementById('announcements-container');
        if(!container) return;
        
        const isAdmin = state.currentUser && state.currentUser.role !== 'resident';
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        const scopedAnnouncements = DATA.announcements.filter(a => a.communityCode === commCode);
        
        container.innerHTML = scopedAnnouncements.map(a => {
            let actionBtns = '';
            if (isAdmin) {
                actionBtns = `
                    <div style="margin-top: 10px;">
                        <button class="btn btn-sm btn-outline text-blue" onclick="app.editAnnouncement(${a.id})"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn btn-sm btn-outline text-red" onclick="app.deleteAnnouncement(${a.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
            }
            return `
                <div class="announcement-card">
                    <h4>${a.title}</h4>
                    <div class="card-meta">
                        <span><i class="fa-solid fa-calendar"></i> ${a.date}</span>
                    </div>
                    <p class="text-muted" style="font-size: 0.95rem;">${a.desc}</p>
                    ${actionBtns}
                </div>
            `;
        }).join('');
    },

    renderEvents() {
        const container = document.getElementById('events-container');
        if(!container) return;
        
        const isAdmin = state.currentUser && state.currentUser.role !== 'resident';
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        const scopedEvents = DATA.events.filter(e => e.communityCode === commCode);

        container.innerHTML = scopedEvents.map(e => {
            let btnHtml = '';
            if (!isAdmin && e.showRegBtn !== false) {
                const hasRegistered = DATA.eventRegistrations.some(r => r.eventId === e.id && r.residentName === state.currentUser.name);
                if (hasRegistered) {
                    btnHtml = `<button class="btn btn-outline btn-sm w-100" disabled><b>Registered</b></button>`;
                } else {
                    btnHtml = `<button class="btn btn-primary btn-sm w-100" onclick="app.registerForEvent(${e.id})">Register for Event</button>`;
                }
            }
            
            let actionBtns = '';
            if (isAdmin) {
                actionBtns = `
                    <div style="margin-top: 10px; display:flex; gap:0.5rem; justify-content:center;">
                        <button class="btn btn-sm btn-outline text-blue w-100" onclick="app.editEvent(${e.id})"><i class="fa-solid fa-pen"></i> Edit</button>
                        <button class="btn btn-sm btn-outline text-red w-100" onclick="app.deleteEvent(${e.id})"><i class="fa-solid fa-trash"></i> Delete</button>
                    </div>
                `;
            }

            return `
                <div class="event-card">
                    <h4>${e.name}</h4>
                    <div class="card-meta">
                        <span><i class="fa-solid fa-calendar"></i> ${e.date}</span>
                        ${e.time ? `<span><i class="fa-regular fa-clock"></i> ${e.time}</span>` : ''}
                        <span><i class="fa-solid fa-location-dot"></i> ${e.location}</span>
                    </div>
                    <p class="text-muted mb-3" style="font-size: 0.95rem;">${e.desc}</p>
                    ${btnHtml}
                    ${actionBtns}
                </div>
            `;
        }).join('');
    },

    renderEventRegistrations() {
        const tbody = document.getElementById('event-registrations-table');
        if(!tbody) return;
        if(state.currentUser && state.currentUser.role === 'superadmin') {
            const commCode = state.currentUser.communityCode;
            const scopedRegs = DATA.eventRegistrations.filter(r => r.communityCode === commCode);
            
            tbody.innerHTML = scopedRegs.map(r => `
                <tr>
                    <td><strong>${r.residentName}</strong></td>
                    <td>${r.flatNumber}</td>
                    <td>${r.eventName}</td>
                    <td>${r.date}</td>
                </tr>
            `).join('');
            if(DATA.eventRegistrations.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted py-4">No registrations found.</td></tr>';
            }
        }
    },

    renderFundDescription() {
        const descEl = document.getElementById('fund-description-text');
        if(descEl) descEl.innerText = DATA.fundDescription || "No description provided yet.";
    },

    renderQRCodes() {
        const adminContainer = document.getElementById('qr-codes-container');
        const residentContainer = document.getElementById('resident-qr-codes-container');
        const selectEl = document.getElementById('pay-qr-serial');
        
        const qrHtml = DATA.qrCodes.map(q => `
            <div class="card p-3 text-center" style="border: 1px solid var(--gray-200); box-shadow: none;">
                <img src="${q.img}" alt="${q.serial}" style="width: 100%; max-width: 150px; border-radius: 8px; margin-bottom: 0.5rem;">
                <h5 class="mb-0">${q.serial}</h5>
                ${(state.currentUser && state.currentUser.role !== 'resident') ? `<button class="btn btn-sm btn-outline text-red mt-2" onclick="app.deleteQR(${q.id})"><i class="fa-solid fa-trash"></i></button>` : ''}
            </div>
        `).join('');

        if (adminContainer) adminContainer.innerHTML = qrHtml;
        if (residentContainer) residentContainer.innerHTML = qrHtml;

        if (selectEl) {
            selectEl.innerHTML = DATA.qrCodes.map(q => `<option value="${q.serial}">${q.serial}</option>`).join('');
        }
    },

    renderTransactions() {
        const tbody = document.getElementById('transactions-table');
        if(!tbody) return;

        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        let myTxns = DATA.transactions.filter(t => t.communityCode === commCode);
        
        if(state.currentUser && state.currentUser.role === 'resident'){
            myTxns = myTxns.filter(t => t.name === state.currentUser.name);
        }

        tbody.innerHTML = myTxns.map(t => {
            const isAdmin = state.currentUser && state.currentUser.role !== 'resident';
            const actionBtns = (isAdmin && t.status === 'Pending') ? `
                <select class="form-control" style="width: auto; padding: 0.25rem; display: inline-block;" onchange="app.updateTransactionStatus('${t.id}', this.value)">
                    <option value="Pending" selected>Pending</option>
                    <option value="Approved">Approve</option>
                    <option value="Rejected">Reject</option>
                </select>
            ` : '-';
            
            return `
                <tr>
                    <td>${t.date}</td>
                    <td>${t.name}</td>
                    <td>${t.flat}</td>
                    <td><strong>${t.amount}</strong></td>
                    <td>${t.txnId}</td>
                    <td><span class="status-badge ${this.getStatusClass(t.status)}">${t.status}</span></td>
                    <td>${actionBtns}</td>
                </tr>
            `;
        }).join('');
    },

    renderAlerts() {
        const container = document.getElementById('alerts-container');
        if(!container) return;
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        const scopedAlerts = DATA.alerts.filter(a => a.communityCode === commCode);
        
        container.innerHTML = scopedAlerts.map(a => `
            <div class="alert-box ${a.type}">
                <div class="alert-icon"><i class="fa-solid ${this.getAlertIcon(a.type)}"></i></div>
                <div>
                    <h4 class="mb-1">${a.title}</h4>
                    <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0.25rem;">${a.time}</p>
                    <p style="font-size: 0.95rem;">${a.desc}</p>
                </div>
            </div>
        `).join('');
        
        document.getElementById('alert-badge').innerText = scopedAlerts.length;
    },

    async renderDirectory(filter = '') {
        const superAdminsTbody = document.getElementById('directory-superadmins-table');
        const adminsTbody = document.getElementById('directory-admins-table');
        const residentsTbody = document.getElementById('directory-residents-table');
        
        const q = filter.toLowerCase();
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        if (!commCode) return;
        
        let dbUsers = [];
        try {
            const response = await fetch(`http://localhost:5000/api/users/directory?communityCode=${commCode}`);
            dbUsers = await response.json();
        } catch(e) {
            console.error('Failed to load directory natively:', e);
        }
        
        const filtered = dbUsers.filter(d => 
            d.name.toLowerCase().includes(q) || 
            (d.flat && d.flat.toLowerCase().includes(q))
        );

        const superadmins = filtered.filter(d => d.role === 'superadmin');
        const admins = filtered.filter(d => d.role === 'admin');
        const residents = filtered.filter(d => d.role === 'resident');
        
        const isSuperAdmin = state.currentUser.role === 'superadmin';

        if (superAdminsTbody) {
            superAdminsTbody.innerHTML = superadmins.map(d => {
                let actionBtn = '-';
                if (isSuperAdmin && d.name === state.currentUser.name) {
                    actionBtn = `<button class="btn btn-sm btn-outline text-red" onclick="app.removeDirectoryUser(${d.id})"><i class="fa-solid fa-trash"></i></button>`;
                }
                return `
                    <tr>
                        <td><strong>${d.name}</strong></td>
                        <td>${d.flat || 'Office'}</td>
                        <td>${d.email}<br><small class="text-muted"><i class="fa-solid fa-phone"></i> ${d.phone}</small></td>
                        <td><span class="status-badge status-resolved">${d.status}</span></td>
                        <td><span class="role-badge text-capitalize">${d.role}</span></td>
                        <td>${actionBtn}</td>
                    </tr>
                `;
            }).join('');
        }

        if (adminsTbody) {
            adminsTbody.innerHTML = admins.map(d => {
                let actionBtns = '-';
                if (isSuperAdmin) {
                    actionBtns = `
                        <button class="btn btn-sm btn-outline text-blue" onclick="app.promoteToSuperAdmin(${d.id})" title="Promote to Super Admin"><i class="fa-solid fa-arrow-up"></i></button>
                        <button class="btn btn-sm btn-outline text-red" onclick="app.removeDirectoryUser(${d.id})" title="Remove Admin"><i class="fa-solid fa-trash"></i></button>
                    `;
                }
                return `
                    <tr>
                        <td><strong>${d.name}</strong></td>
                        <td>${d.flat || 'Office'}</td>
                        <td>${d.email}<br><small class="text-muted"><i class="fa-solid fa-phone"></i> ${d.phone}</small></td>
                        <td><span class="status-badge status-resolved">${d.status}</span></td>
                        <td><span class="role-badge text-capitalize">${d.role}</span></td>
                        <td>${actionBtns}</td>
                    </tr>
                `;
            }).join('');
        }

        if (residentsTbody && (state.currentUser.role === 'admin' || isSuperAdmin)) {
            residentsTbody.innerHTML = residents.map(d => `
                <tr>
                    <td><strong>${d.name}</strong></td>
                    <td>${d.flat || '-'}</td>
                    <td>${d.email}<br><small class="text-muted"><i class="fa-solid fa-phone"></i> ${d.phone}</small></td>
                    <td>Account Active</td>
                    <td><span class="status-badge status-resolved">Resident</span></td>
                </tr>
            `).join('');
        }
    },

    renderContacts() {
        const container = document.getElementById('contact-container');
        if(!container) return;
        const isAdmin = state.currentUser.role === 'admin' || state.currentUser.role === 'superadmin';
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        const scopedContacts = DATA.contacts.filter(c => c.communityCode === commCode || !c.communityCode); // Default contacts show everywhere if null
        
        container.innerHTML = scopedContacts.map(c => `
            <div class="card p-4">
                <div class="info-item" style="display:flex; align-items:flex-start; gap:1.25rem;">
                    <div class="icon" style="width: 45px; height: 45px; background: var(--primary-light); color: white; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-size: 1.2rem;"><i class="fa-solid ${c.icon}"></i></div>
                    <div style="flex: 1;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <h4 style="margin-bottom: 0.25rem;">${c.title}</h4>
                            ${isAdmin ? `
                                <div>
                                    <button class="btn btn-sm btn-outline text-blue" style="padding: 0.2rem 0.5rem;" onclick="app.editContact(${c.id})"><i class="fa-solid fa-pen"></i></button>
                                    <button class="btn btn-sm btn-outline text-red" style="padding: 0.2rem 0.5rem;" onclick="app.deleteContact(${c.id})"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            ` : ''}
                        </div>
                        <p style="color: var(--gray-500); font-size: 0.95rem; white-space: pre-line;">${c.info}</p>
                    </div>
                </div>
            </div>
        `).join('');
    },

    // -------------------------------------------------------------
    // FUNCTIONALITY & ACTIONS
    // -------------------------------------------------------------
    async submitComplaint(e) {
        e.preventDefault();
        const cid = 'CMP00' + (DATA.complaints.length + 1);
        const name = document.getElementById('cmp-name').value;
        const flat = document.getElementById('cmp-flat').value;
        const cat = document.getElementById('cmp-category').value;
        const title = document.getElementById('cmp-title').value;
        const desc = document.getElementById('cmp-desc').value;

        const newComplaint = {
            id: cid, name, flat, category: cat, title, desc, 
            status: 'Pending', 
            date: new Date().toISOString().split('T')[0],
            communityCode: state.currentUser.communityCode,
            timestamp: Date.now()
        };

        try {
            await fetch('http://localhost:5000/api/data/complaints', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComplaint)
            });
            DATA.complaints.unshift(newComplaint);
        } catch(err) { console.error("Complaints err:", err); }
        
        document.getElementById('complaint-form').reset();
        if(state.currentUser.role === 'resident'){
            document.getElementById('cmp-name').value = state.currentUser.name;
        }

        this.showToast('Complaint registered successfully! ID: ' + cid, 'success');
        this.renderDashboardStats();
        this.renderAdminComplaints();
        this.renderUserComplaints();
        this.navigateTo('dashboard');
    },

    async registerForEvent(eventId) {
        if(!state.currentUser || state.currentUser.role !== 'resident') return;
        
        const eventItem = DATA.events.find(e => e.id === eventId);
        if(!eventItem) return;

        const alreadyRegistered = DATA.eventRegistrations.some(r => r.eventId === eventId && r.residentName === state.currentUser.name);
        if(alreadyRegistered) {
            this.showToast('You are already registered for this event.', 'error');
            return;
        }

        let flat = 'Unknown';
        const dirUser = DATA.directory.find(d => d.name === state.currentUser.name && d.role === 'resident');
        if(dirUser) flat = dirUser.flat;

        const payload = {
            id: Date.now(),
            eventId: eventId,
            eventName: eventItem.name,
            residentName: state.currentUser.name,
            flatNumber: flat,
            date: new Date().toISOString().split('T')[0],
            communityCode: state.currentUser.communityCode
        };

        try {
            await fetch('http://localhost:5000/api/data/eventRegistrations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            DATA.eventRegistrations.unshift(payload);
            
            this.renderEvents();
            this.renderEventRegistrations();
            this.showToast('Successfully registered for ' + eventItem.name, 'success');
        } catch(e) {
            console.error("API error", e);
        }
    },



    updateTransactionStatus(id, newStatus) {
        const t = DATA.transactions.find(x => x.id === id);
        if(t) {
            t.status = newStatus;
            this.showToast(`Transaction ${id} marked as ${newStatus}`, 'success');
            this.renderTransactions();
        }
    },



    searchDirectory(val) {
        this.renderDirectory(val);
    },

    async triggerAlert() {
        const msg = prompt('Enter emergency alert message to broadcast:');
        if(msg) {
            const payload = {
                type: 'fire',
                title: 'EMERGENCY ALERT',
                time: 'Just now',
                desc: msg,
                communityCode: state.currentUser.communityCode
            };

            try {
                await fetch('http://localhost:5000/api/data/alerts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                DATA.alerts.unshift(payload);
                this.renderAlerts();
                this.showToast('Alert broadcasted successfully globally.', 'success');
            } catch(e) {
                console.error("API error", e);
            }
            
            // Audio Notification
            try {
                const actx = new (window.AudioContext || window.webkitAudioContext)();
                if (actx) {
                    const osc = actx.createOscillator();
                    const gain = actx.createGain();
                    osc.connect(gain);
                    gain.connect(actx.destination);
                    
                    osc.type = 'square'; // Piercing loud sound
                    const duration = 30; // 30 seconds

                    // Set initial loud volume
                    gain.gain.setValueAtTime(0.8, actx.currentTime);

                    // Create siren effect (sweeping frequency up and down)
                    for (let i = 0; i < duration; i++) {
                        osc.frequency.setValueAtTime(400, actx.currentTime + i);
                        osc.frequency.linearRampToValueAtTime(800, actx.currentTime + i + 0.5);
                        osc.frequency.linearRampToValueAtTime(400, actx.currentTime + i + 1.0);
                    }

                    osc.start(actx.currentTime);
                    osc.stop(actx.currentTime + duration);
                }
            } catch(e) { console.error('Audio api not supported', e); }
        }
    },

    // -------------------------------------------------------------
    // MODALS & HELPERS
    // -------------------------------------------------------------
    showAddAnnouncementModal() { 
        document.getElementById('form-announcement').reset();
        document.getElementById('ann-id').value = '';
        document.getElementById('modal-ann-title-text').innerText = 'New Announcement';
        document.getElementById('btn-submit-ann').innerText = 'Publish Announcement';
        document.getElementById('modal-announcement').classList.add('active'); 
    },
    
    showAddEventModal() { 
        document.getElementById('form-event').reset();
        document.getElementById('evt-id').value = '';
        document.getElementById('evt-show-reg').checked = true;
        document.getElementById('modal-evt-title-text').innerText = 'Create Event';
        document.getElementById('btn-submit-evt').innerText = 'Create Event';
        document.getElementById('modal-event').classList.add('active'); 
    },
    
    showEditFundDescriptionModal() {
        document.getElementById('fund-desc-input').value = DATA.fundDescription || '';
        document.getElementById('modal-fund-desc').classList.add('active');
    },
    
    showAddQRModal() {
        document.getElementById('form-qr-upload').reset();
        document.getElementById('modal-qr-upload').classList.add('active');
    },

    showAddPaymentModal() {
        document.getElementById('form-payment-submit').reset();
        document.getElementById('pay-name').value = state.currentUser ? state.currentUser.name : '';
        this.renderQRCodes(); // Ensure dropdown is updated
        document.getElementById('modal-payment-submit').classList.add('active');
    },

    showAddAdminModal() {
        document.getElementById('form-add-admin').reset();
        document.getElementById('modal-add-admin').classList.add('active');
    },

    submitAddAdmin(e) {
        e.preventDefault();
        const name = document.getElementById('admin-name').value;
        const flat = document.getElementById('admin-flat').value;
        const contact = document.getElementById('admin-contact').value;
        
        const newId = DATA.directory.length ? Math.max(...DATA.directory.map(x=>x.id)) + 1 : 1;
        DATA.directory.push({ id: newId, name, flat, contact, moveIn: new Date().toISOString().split('T')[0], status: 'Staff', role: 'admin' });
        
        this.renderDirectory();
        this.closeModal('modal-add-admin');
        this.showToast('Admin added successfully.', 'success');
    },

    promoteToSuperAdmin(id) {
        if(confirm('Are you sure you want to promote this admin to Super Admin?')) {
            const admin = DATA.directory.find(x => x.id === id);
            if(admin) admin.role = 'superadmin';
            this.renderDirectory();
            this.showToast(admin.name + ' promoted to Super Admin.', 'success');
        }
    },

    removeDirectoryUser(id) {
        const userToRemove = DATA.directory.find(x => x.id === id);
        if(!userToRemove) return;

        if (userToRemove.role === 'superadmin') {
            const superAdmins = DATA.directory.filter(x => x.role === 'superadmin');
            if (superAdmins.length <= 1) {
                alert('You are the only Super Admin. Please promote another Admin to Super Admin before deleting your account.');
                return;
            }
            if(!confirm('Are you sure you want to delete your Super Admin account? You will be logged out.')) return;
        } else {
            if(!confirm('Are you sure you want to remove this Admin?')) return;
        }

        DATA.directory = DATA.directory.filter(x => x.id !== id);
        
        if (userToRemove.name === state.currentUser.name) {
            this.logout();
        } else {
            this.renderDirectory();
            this.showToast(userToRemove.name + ' has been removed.', 'success');
        }
    },

    showAddContactModal() { 
        document.getElementById('form-contact').reset();
        document.getElementById('contact-id').value = '';
        document.getElementById('modal-contact-title').innerText = 'Add Contact Info';
        document.getElementById('modal-contact').classList.add('active'); 
    },
    closeModal(id) { document.getElementById(id).classList.remove('active'); },

    editContact(id) {
        const c = DATA.contacts.find(x => x.id === id);
        if(c) {
            document.getElementById('contact-id').value = c.id;
            document.getElementById('contact-title').value = c.title;
            document.getElementById('contact-info').value = c.info;
            document.getElementById('contact-icon').value = c.icon;
            document.getElementById('modal-contact-title').innerText = 'Edit Contact Info';
            document.getElementById('modal-contact').classList.add('active');
        }
    },

    async saveContact(e) {
        e.preventDefault();
        const id = document.getElementById('contact-id').value;
        const title = document.getElementById('contact-title').value;
        const info = document.getElementById('contact-info').value;
        const icon = document.getElementById('contact-icon').value;
        const commCode = state.currentUser ? state.currentUser.communityCode : null;
        
        if (id) {
            const c = DATA.contacts.find(x => x.id == id);
            if(c) {
                c.title = title; c.info = info; c.icon = icon;
                try {
                    await fetch(`http://localhost:5000/api/data/contacts/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ title, info, icon })
                    });
                } catch(err) { console.log('Contacts push fail', err); }
            }
            this.showToast('Contact updated successfully', 'success');
        } else {
            const newId = DATA.contacts.length ? Math.max(...DATA.contacts.map(x=>x.id)) + 1 : 1;
            const payload = { id: newId, title, info, icon, communityCode: commCode };
            
            try {
                await fetch('http://localhost:5000/api/data/contacts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                DATA.contacts.push(payload);
            } catch(err) { console.log('Contacts push fail', err); }

            this.showToast('Contact added successfully', 'success');
        }
        
        this.closeModal('modal-contact');
        this.renderContacts();
    },

    async deleteContact(id) {
        if(confirm('Are you sure you want to delete this contact info?')) {
            DATA.contacts = DATA.contacts.filter(x => x.id != id);
            
            try {
                await fetch(`http://localhost:5000/api/data/contacts/${id}`, {
                    method: 'DELETE'
                });
            } catch(err) { console.log('Contacts del fail', err); }

            this.renderContacts();
            this.showToast('Contact deleted globally', 'success');
        }
    },

    saveFundDescription(e) {
        e.preventDefault();
        DATA.fundDescription = document.getElementById('fund-desc-input').value;
        this.renderFundDescription();
        this.closeModal('modal-fund-desc');
        this.showToast('Fund description updated.', 'success');
    },

    deleteFundDescription() {
        if(confirm('Are you sure you want to delete the fund description?')) {
            DATA.fundDescription = '';
            this.renderFundDescription();
            this.closeModal('modal-fund-desc');
            this.showToast('Fund description deleted.', 'success');
        }
    },

    uploadQRCode(e) {
        e.preventDefault();
        const fileInput = document.getElementById('qr-file-input');
        const serialInput = document.getElementById('qr-serial-input').value.trim();
        
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const newQR = {
                    id: Date.now(),
                    serial: serialInput || 'QR-' + Math.floor(Math.random() * 10000),
                    img: event.target.result
                };
                DATA.qrCodes.push(newQR);
                this.renderQRCodes();
                this.closeModal('modal-qr-upload');
                this.showToast('QR Code uploaded successfully.', 'success');
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    },

    deleteQR(id) {
        if(confirm('Delete this QR code?')) {
            DATA.qrCodes = DATA.qrCodes.filter(q => q.id !== id);
            this.renderQRCodes();
            this.showToast('QR Code deleted.', 'success');
        }
    },

    submitPaymentDetails(e) {
        e.preventDefault();
        const name = document.getElementById('pay-name').value;
        const flat = document.getElementById('pay-flat').value;
        const date = document.getElementById('pay-date').value;
        const category = document.getElementById('pay-category').value;
        const amount = document.getElementById('pay-amount').value;
        const txnId = document.getElementById('pay-txn-id').value;
        
        // Add Txn
        const newTxn = {
            id: 'TXN' + Math.floor(Math.random() * 100000),
            name, flat, date, category, amount: '$' + parseInt(amount).toLocaleString(), txnId,
            status: 'Pending',
            screenshot: '' // In real app, upload via FileReader or API
        };

        DATA.transactions.unshift(newTxn);
        this.renderTransactions();
        this.closeModal('modal-payment-submit');
        this.showToast('Payment details submitted. Waiting for verification.', 'success');
    },

    async addAnnouncement(e) {
        e.preventDefault();
        const id = document.getElementById('ann-id').value;
        const title = document.getElementById('ann-title').value;
        const desc = document.getElementById('ann-desc').value;
        
        if (id) {
            const ann = DATA.announcements.find(x => x.id == id);
            if(ann) { ann.title = title; ann.desc = desc; }
            this.showToast('Announcement updated successfully', 'success');
        } else {
            const payload = {
                id: DATA.announcements.length ? Math.max(...DATA.announcements.map(x=>x.id)) + 1 : 1,
                title, desc,
                date: new Date().toISOString().split('T')[0],
                communityCode: state.currentUser.communityCode
            };
            
            try {
                await fetch('http://localhost:5000/api/data/announcements', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                // Local push for immediate render natively
                DATA.announcements.unshift(payload);
                this.showToast('Announcement published to Server!', 'success');
            } catch(err) {
                console.error("API failed:", err);
            }
        }
        
        this.closeModal('modal-announcement');
        e.target.reset();
        this.renderAnnouncements();
        this.renderDashboardStats();
    },

    editAnnouncement(id) {
        const a = DATA.announcements.find(x => x.id === id);
        if(a) {
            document.getElementById('ann-id').value = a.id;
            document.getElementById('ann-title').value = a.title;
            document.getElementById('ann-desc').value = a.desc;
            document.getElementById('modal-ann-title-text').innerText = 'Edit Announcement';
            document.getElementById('btn-submit-ann').innerText = 'Save Changes';
            document.getElementById('modal-announcement').classList.add('active');
        }
    },

    deleteAnnouncement(id) {
        if(confirm('Are you sure you want to delete this announcement?')) {
            DATA.announcements = DATA.announcements.filter(x => x.id !== id);
            this.renderAnnouncements();
            this.renderDashboardStats();
            this.showToast('Announcement deleted', 'success');
        }
    },

    async addEvent(e) {
        e.preventDefault();
        const id = document.getElementById('evt-id').value;
        const name = document.getElementById('evt-name').value;
        const date = document.getElementById('evt-date').value;
        const time = document.getElementById('evt-time').value;
        const location = document.getElementById('evt-location').value;
        const desc = document.getElementById('evt-desc').value;
        const showRegBtn = document.getElementById('evt-show-reg').checked;
        
        if (id) {
            const evt = DATA.events.find(x => x.id == id);
            if(evt) {
                evt.name = name; evt.date = date; evt.time = time; evt.location = location; evt.desc = desc; evt.showRegBtn = showRegBtn;
            }
            this.showToast('Event updated successfully', 'success');
        } else {
            const payload = { 
                id: DATA.events.length ? Math.max(...DATA.events.map(x=>x.id)) + 1 : 1, 
                name, date, time, location, desc, showRegBtn,
                communityCode: state.currentUser.communityCode
            };
            
            try {
                await fetch('http://localhost:5000/api/data/events', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                DATA.events.push(payload);
                this.showToast('Event securely created globally!', 'success');
            } catch(e) {
                console.error("API Blocked", e);
            }
        }
        
        this.closeModal('modal-event');
        e.target.reset();
        this.renderEvents();
        this.renderDashboardStats();
    },

    editEvent(id) {
        const e = DATA.events.find(x => x.id === id);
        if(e) {
            document.getElementById('evt-id').value = e.id;
            document.getElementById('evt-name').value = e.name;
            document.getElementById('evt-date').value = e.date;
            document.getElementById('evt-time').value = e.time || '';
            document.getElementById('evt-location').value = e.location;
            document.getElementById('evt-desc').value = e.desc;
            document.getElementById('evt-show-reg').checked = e.showRegBtn !== false;
            document.getElementById('modal-evt-title-text').innerText = 'Edit Event';
            document.getElementById('btn-submit-evt').innerText = 'Save Changes';
            document.getElementById('modal-event').classList.add('active');
        }
    },

    deleteEvent(id) {
        if(confirm('Are you sure you want to delete this event?')) {
            DATA.events = DATA.events.filter(x => x.id !== id);
            this.renderEvents();
            this.renderDashboardStats();
            this.showToast('Event deleted', 'success');
        }
    },

    getStatusClass(status) {
        if(status === 'Resolved') return 'status-resolved';
        if(status === 'Pending') return 'status-pending';
        return 'status-inprogress';
    },

    getAlertIcon(type) {
        if(type === 'fire') return 'fa-fire';
        if(type === 'security') return 'fa-shield-halved';
        if(type === 'water') return 'fa-droplet';
        return 'fa-bell';
    },

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = 'fa-info-circle';
        if(type === 'success') icon = 'fa-check-circle';
        if(type === 'error') icon = 'fa-exclamation-circle';

        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // -------------------------------------------------------------
    // PROFILE MANAGEMENT
    // -------------------------------------------------------------
    toggleProfileMenu() {
        document.getElementById('profile-dropdown').classList.toggle('hidden');
    },

    openProfileModal() {
        this.toggleProfileMenu(); // Auto close the dropdown
        if(!state.currentUser) return;

        // Fetch precise data mapping
        const userRec = DATA.directory.find(d => d.name === state.currentUser.name && d.role === state.currentUser.role);
        
        document.getElementById('prof-name').value = state.currentUser.name;
        document.getElementById('prof-phone').value = userRec ? userRec.phone : '';
        document.getElementById('prof-email').value = userRec ? userRec.email : '';
        
        if (state.currentUser.role === 'resident') {
            document.querySelectorAll('.resident-prof-only').forEach(el => el.classList.remove('hidden'));
            document.getElementById('prof-flat').value = userRec ? userRec.flat : '';
            document.getElementById('prof-flat').required = true;
            document.getElementById('prof-submit-btn').innerText = "Submit to Admin";
        } else {
            document.querySelectorAll('.resident-prof-only').forEach(el => el.classList.add('hidden'));
            document.getElementById('prof-flat').required = false;
            document.getElementById('prof-submit-btn').innerText = "Save Changes";
        }

        document.getElementById('modal-view-profile').classList.add('active');
    },

    saveProfileEdits(e) {
        e.preventDefault();
        const userRec = DATA.directory.find(d => d.name === state.currentUser.name && d.role === state.currentUser.role);
        
        const newName = document.getElementById('prof-name').value;
        const newPhone = document.getElementById('prof-phone').value;
        const newEmail = document.getElementById('prof-email').value;

        if (userRec) {
            userRec.name = newName;
            userRec.phone = newPhone;
            userRec.email = newEmail;
            
            // Re-sync contact text string safely for older UI integrations
            userRec.contact = `${newEmail} / ${newPhone}`;

            if(state.currentUser.role === 'resident') {
                userRec.flat = document.getElementById('prof-flat').value;
                this.showToast('Profile edits submitted successfully to Admin.', 'success');
            } else {
                this.showToast('Profile updated globally.', 'success');
            }

            state.currentUser.name = newName;
            this.setupDashboard(); // Re-render name top banner
        }

        this.closeModal('modal-view-profile');
    },

    openPasswordModal() {
        this.toggleProfileMenu();
        document.getElementById('form-password').reset();
        document.getElementById('modal-change-password').classList.add('active');
    },

    changePassword(e) {
        e.preventDefault();
        const cur = document.getElementById('pwd-old').value;
        const n1 = document.getElementById('pwd-new').value;
        const n2 = document.getElementById('pwd-confirm').value;

        if (cur !== '1234') { // Mock Check utilizing the known default
            this.showToast('Previous password incorrect.', 'error');
            return;
        }
        if (n1 !== n2) {
            this.showToast('New passwords do not match!', 'error');
            return;
        }

        this.showToast('Password successfully changed!', 'success');
        this.closeModal('modal-change-password');
    },

    openCommunityCodeModal() {
        this.toggleProfileMenu();
        
        document.getElementById('comm-code-display').innerText = DATA.communityCode || 'NOT SET';
        
        if (state.currentUser.role === 'admin' || state.currentUser.role === 'superadmin') {
            document.getElementById('comm-code-admin-section').classList.remove('hidden');
        } else {
            document.getElementById('comm-code-admin-section').classList.add('hidden');
        }
        
        document.getElementById('modal-community-code').classList.add('active');
    },

    updateCommunityCode(e) {
        e.preventDefault();
        const code = document.getElementById('comm-code-input').value.trim();
        
        if(code) {
            DATA.communityCode = code;
            document.getElementById('comm-code-display').innerText = code;
            
            // Send Alert globally mapping across all residents/admins via standard app.alerts rendering natively built
            DATA.alerts.unshift({
                type: 'security',
                title: 'Community Code Changed',
                time: 'Just now',
                desc: `The Community Code has been securely changed by an Administrator.`,
                communityCode: state.currentUser.communityCode
            });
            this.renderAlerts();
            this.showToast('Community Code updated & Alert dispatched to all users.', 'success');
            
            document.getElementById('form-comm-code').reset();
            this.closeModal('modal-community-code');
        }
    }
};

// Global click to close the profile dropdown when clicking outside
document.addEventListener('click', (e) => {
    const pMenu = document.querySelector('.profile-menu');
    const drop = document.getElementById('profile-dropdown');
    if (pMenu && drop && !pMenu.contains(e.target)) {
        drop.classList.add('hidden');
    }
});

// Initialize App
document.addEventListener('DOMContentLoaded', () => app.init());
