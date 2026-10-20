import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Account');

  // User Data
  let user = { firstName: 'User', email: 'user@example.com', username: 'user123' };
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      user = JSON.parse(storedUser);
    }
  } catch (e) {
    console.error("Error parsing user data:", e);
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  // Sidebar Menu Items
  const menuItems = [
    { name: 'New Order', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Add Funds', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Tickets', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', badge: '0' },
    { name: 'API', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'Affiliates', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { name: 'Payments', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Child Panels', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { name: 'Transactions', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { name: 'Updates', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  ];

  // Account Settings Page
  const AccountSettings = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePasswordChange = async (e) => {
      e.preventDefault();
      if (!currentPassword || !newPassword || !confirmPassword) return alert('Please fill all password fields.');
      if (newPassword !== confirmPassword) return alert('New passwords do not match.');

      setLoading(true);
      try {
        const response = await apiFetch('/api/auth/change-password', {
          method: 'PUT',
          body: JSON.stringify({ email: user.email, currentPassword, newPassword }),
        });
        const data = await response.json();
        if (response.ok) {
          alert('✅ Password Changed Successfully!');
          setCurrentPassword(''); setNewPassword(''); setConfirmPassword('');
        } else {
          alert(`❌ ${data.message}`);
        }
      } catch (error) {
        alert('❌ Server se connect nahi ho raha.');
      } finally {
        setLoading(false);
      }
    };

    return (
      <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        
        <div style={{ background: '#fef3c7', color: '#b45309', padding: '15px', borderRadius: '6px', marginBottom: '25px', fontSize: '14px', fontWeight: '600' }}>
          You never changed your password, for your best security you are required to update your passwords.
        </div>

        <form onSubmit={handlePasswordChange}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Current password</label>
            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>New password</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Confirm new password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none' }} />
          </div>
          <button type="submit" disabled={loading} style={{ padding: '10px 20px', background: '#2e8b7b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '30px' }}>
            {loading ? 'Changing...' : 'Change password'}
          </button>
        </form>

        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '30px' }} />

        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>API key</label>
          <input type="text" placeholder="Press regenerate button to generate api key" disabled style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none', color: '#94a3b8', marginBottom: '15px' }} />
          <button type="button" onClick={() => alert('API Key Generated (Demo)')} style={{ padding: '10px 20px', background: '#2e8b7b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Generate new</button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '30px' }} />

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Username</label>
          <input type="text" value={user.username || 'user123'} disabled style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none', color: '#64748b' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Email</label>
          <input type="text" value={user.email || 'user@example.com'} disabled style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none', color: '#64748b' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>New Email</label>
          <input type="email" style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Current Password</label>
          <input type="password" style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none' }} />
        </div>
        <button type="button" onClick={() => alert('Email Change Requested (Demo)')} style={{ padding: '10px 20px', background: '#a7d8cb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', marginBottom: '40px' }}>Change Email</button>

        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '30px' }} />

        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>Two-factor authentication</h3>
          <p style={{ fontSize: '14px', color: '#475569', marginBottom: '20px', lineHeight: '1.6' }}>Email-based option to add an extra layer of protection to your account.</p>
          <button type="button" onClick={() => alert('2FA Enabled (Demo)')} style={{ padding: '10px 20px', background: '#a7d8cb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Enable</button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '30px' }} />

        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Authorized Whatsapp Number</label>
          <input type="text" style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f0fdfa', outline: 'none' }} />
        </div>
        <button type="button" onClick={() => alert('Whatsapp Number Saved (Demo)')} style={{ padding: '10px 20px', background: '#a7d8cb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Save Authorization</button>
      </div>
    );
  };

  const PlaceholderPage = ({ title }) => (
    <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>{title}</h2>
      <p style={{ color: '#64748b' }}>Content for {title} coming soon.</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Account': return <AccountSettings />;
      default: return <PlaceholderPage title={activeTab} />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', fontFamily: "'Segoe UI', sans-serif" }}>
      
      {/* SIDEBAR (Fixed, Solid Green Color, Exact Image Look) */}
      <div style={{ 
        width: '250px', 
        background: '#3b9b88', // Exact green color from image
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column', 
        position: 'fixed', // Hamesha fix rahega
        top: 0,
        left: 0,
        bottom: 0, // Screen ke neeche tak stretch
        zIndex: 100,
        overflowY: 'auto' 
      }}>
        <div style={{ flex: 1, paddingTop: '30px' }}>
          {menuItems.map((item, index) => {
            const isActive = activeTab === item.name;
            return (
              <div 
                key={index} 
                onClick={() => setActiveTab(item.name)} 
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                  padding: '15px 30px', cursor: 'pointer', color: '#fff', 
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  borderLeft: isActive ? '4px solid #fff' : '4px solid transparent',
                  fontSize: '15px', fontWeight: '500'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={item.icon}></path></svg>
                  {item.name}
                </div>
                {item.badge && (
                  <span style={{ background: '#fff', color: '#3b9b88', padding: '2px 8px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, marginLeft: '250px', display: 'flex', flexDirection: 'column' }}>
        
        {/* TOPBAR (Fixed at top) */}
        <div style={{ 
          background: '#fff', padding: '15px 40px', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          borderBottom: '1px solid #e2e8f0', 
          position: 'sticky', top: 0, zIndex: 50 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '22px', fontWeight: '800', color: '#3b9b88' }}>PAK</span>
            <span style={{ fontSize: '22px', fontWeight: '400', color: '#94a3b8' }}>SMMPANELS</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <button style={{ background: '#2e8b7b', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>
              PKR ▼
            </button>
            <span onClick={() => setActiveTab('Account')} style={{ fontSize: '15px', color: '#475569', cursor: 'pointer', fontWeight: '500' }}>Account</span>
            <span onClick={handleLogout} style={{ fontSize: '15px', color: '#475569', cursor: 'pointer', fontWeight: '500' }}>Logout</span>
          </div>
        </div>

        {/* DYNAMIC PAGE CONTENT */}
        <div style={{ padding: '40px', width: '100%' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;