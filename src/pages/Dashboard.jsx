import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- SUB-COMPONENTS ---

// 1. Overview Page (Stats & Chart)
const OverviewPage = ({ user }) => (
  <div className="page-transition">
    {/* TOP STATS CARDS */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
      {[
        { title: 'Account Balance', value: '$10.00', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', color: '#10b981', bg: '#ecfdf5', border: '#a7f3d0' },
        { title: 'Total Spent', value: '$0.00', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#f59e0b', bg: '#fffbeb', border: '#fde68a' },
        { title: 'Total Orders', value: '0', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', color: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe' },
        { title: 'Active Orders', value: '0', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe' }
      ].map((stat, i) => (
        <div key={i} className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', background: stat.bg, color: stat.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${stat.border}`, boxShadow: `0 4px 10px ${stat.border}` }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d={stat.icon}></path></svg>
            </div>
          </div>
          <div>
            <h3 style={{ color: '#6b7280', fontSize: '13px', fontWeight: '600', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.title}</h3>
            <div style={{ fontSize: '28px', fontWeight: '800', color: '#111827' }}>{stat.value}</div>
          </div>
        </div>
      ))}
    </div>

    {/* CHART & TABLE GRID */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
      <div style={{ gridColumn: 'span 8', background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #f3f4f6', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, color: '#111827', fontSize: '18px', fontWeight: '700' }}>Sales Overview</h2>
          <select style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#f9fafb', fontSize: '13px', color: '#374151', outline: 'none', fontWeight: '500' }}>
            <option>Last 7 Days</option><option>Last 30 Days</option>
          </select>
        </div>
        <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '15px' }}>
           {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
              <div key={i} className="chart-bar-container">
                 <div className="chart-bar" style={{ height: `${height}%`, background: height > 80 ? 'linear-gradient(180deg, #3b9b88 0%, #2dd4bf 100%)' : '#e2e8f0', borderRadius: '6px 6px 0 0' }}></div>
                 <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '500', marginTop: '8px' }}>Day {i+1}</span>
              </div>
           ))}
        </div>
      </div>
      <div style={{ gridColumn: 'span 4', background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #f3f4f6', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
         <h2 style={{ margin: '0 0 20px 0', color: '#111827', fontSize: '18px', fontWeight: '700' }}>Announcements</h2>
         <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', marginBottom: '16px', borderLeft: '3px solid #3b9b88' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#111827' }}>New Services Added</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>📢 New Instagram and TikTok services added. Check them out now!</p>
         </div>
         <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#111827' }}>Server Upgraded</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>🚀 Servers upgraded for faster delivery.</p>
         </div>
      </div>
    </div>
  </div>
);

// 2. New Order Page (Connected to Backend)
const NewOrderPage = ({ onOrderPlaced }) => {
  const [service, setService] = useState('Instagram Followers');
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aapke backend ka route: /api/orders
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, link, quantity }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`✅ Order Placed! ID: ${data.orderId}`);
        setLink('');
        setQuantity('');
        onOrderPlaced(); // History update karne ke liye trigger
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      alert('❌ Backend server connect nahi hai.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition" style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #f3f4f6', maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <h2 style={{ margin: '0 0 20px 0', color: '#111827', fontSize: '20px', fontWeight: '700' }}>Place New Order</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Service</label>
          <select className="input-field" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="Instagram Followers">Instagram Followers - $1.00/1k</option>
            <option value="YouTube Views">YouTube Views - $0.50/1k</option>
            <option value="TikTok Likes">TikTok Likes - $0.20/1k</option>
          </select>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Link</label>
          <input type="text" placeholder="https://instagram.com/username" className="input-field" value={link} onChange={(e) => setLink(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Quantity</label>
          <input type="number" placeholder="1000" className="input-field" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Placing Order...' : 'Submit Order'}
        </button>
      </form>
    </div>
  );
};

// 3. Order History Page (Fetch from Backend)
const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="page-transition" style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #f3f4f6', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <h2 style={{ margin: '0 0 20px 0', color: '#111827', fontSize: '20px', fontWeight: '700' }}>Order History</h2>
      
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p style={{ color: '#6b7280' }}>No orders found. Place your first order!</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb', color: '#6b7280', fontSize: '13px' }}>
              <th style={{ padding: '16px 12px' }}>ID</th>
              <th style={{ padding: '16px 12px' }}>Service</th>
              <th style={{ padding: '16px 12px' }}>Link</th>
              <th style={{ padding: '16px 12px' }}>Qty</th>
              <th style={{ padding: '16px 12px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="table-row">
                <td style={{ padding: '16px 12px', fontWeight: '600' }}>#{order.id.toString().slice(-4)}</td>
                <td style={{ padding: '16px 12px' }}>{order.service}</td>
                <td style={{ padding: '16px 12px', color: '#3b82f6', maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order.link}</td>
                <td style={{ padding: '16px 12px' }}>{order.quantity}</td>
                <td style={{ padding: '16px 12px' }}>
                  <span style={{ background: order.status === 'Completed' ? '#dcfce7' : '#fef3c7', color: order.status === 'Completed' ? '#15803d' : '#b45309', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// 4. Add Funds Page
const AddFundsPage = () => (
  <div className="page-transition" style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #f3f4f6', maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
    <h2 style={{ margin: '0 0 20px 0', color: '#111827', fontSize: '20px', fontWeight: '700' }}>Add Funds to Wallet</h2>
    <div style={{ background: 'linear-gradient(135deg, #3b9b88 0%, #2dd4bf 100%)', padding: '20px', borderRadius: '12px', color: '#fff', marginBottom: '24px' }}>
       <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Current Balance</p>
       <h3 style={{ margin: '5px 0 0 0', fontSize: '28px', fontWeight: '800' }}>$10.00</h3>
    </div>
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Payment Method</label>
      <select className="input-field">
        <option>JazzCash</option><option>EasyPaisa</option><option>Crypto (USDT)</option>
      </select>
    </div>
    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Amount ($)</label>
      <input type="number" placeholder="Enter amount" className="input-field" />
    </div>
    <button onClick={() => alert('Payment Request Submitted (Demo)')} className="btn-primary" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
      Submit Payment
    </button>
  </div>
);

// 5. Support Page
const SupportPage = () => (
  <div className="page-transition" style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #f3f4f6', maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
    <h2 style={{ margin: '0 0 20px 0', color: '#111827', fontSize: '20px', fontWeight: '700' }}>Support Ticket</h2>
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Subject</label>
      <input type="text" placeholder="e.g. Order Issue" className="input-field" />
    </div>
    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#374151' }}>Message</label>
      <textarea rows="4" placeholder="Describe your issue..." className="input-field" style={{ resize: 'none' }}></textarea>
    </div>
    <button onClick={() => alert('Ticket Submitted (Demo)')} className="btn-primary" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)' }}>
      Submit Ticket
    </button>
  </div>
);

// --- MAIN DASHBOARD LAYOUT ---
const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [refreshHistory, setRefreshHistory] = useState(0); // History refresh karne ke liye

  // Login ke waqt save kiya hua user data nikalna
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'User', username: 'user' };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleOrderPlaced = () => {
    setRefreshHistory(prev => prev + 1); // Order place hone par history refresh hogi
  };

  const menuItems = [
    { name: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { name: 'New Order', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Order History', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Add Funds', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Support', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return <OverviewPage user={user} />;
      case 'New Order': return <NewOrderPage onOrderPlaced={handleOrderPlaced} />;
      case 'Order History': return <OrderHistoryPage key={refreshHistory} />; // key change se re-render hoga
      case 'Add Funds': return <AddFundsPage />;
      case 'Support': return <SupportPage />;
      default: return <OverviewPage user={user} />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', 'Poppins', sans-serif" }}>
      
      {/* CSS ANIMATIONS */}
      <style>
        {`
          @keyframes slideUpFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .page-transition { animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
          .stat-card { background: #fff; padding: 24px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); border: 1px solid #f3f4f6; display: flex; flex-direction: column; gap: 16px; animation: popIn 0.4s ease-out forwards; opacity: 0; transition: all 0.3s ease; }
          .stat-card:nth-child(1) { animation-delay: 0.1s; } .stat-card:nth-child(2) { animation-delay: 0.2s; } .stat-card:nth-child(3) { animation-delay: 0.3s; } .stat-card:nth-child(4) { animation-delay: 0.4s; }
          .stat-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); border-color: #d1d5db; }
          @keyframes growBar { from { height: 0; } }
          .chart-bar-container { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; }
          .chart-bar { width: 100%; transition: all 0.3s ease; animation: growBar 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .chart-bar:hover { filter: brightness(0.9); transform: scaleY(1.02); }
          .input-field { width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #f9fafb; outline: none; font-size: 14px; transition: all 0.3s ease; }
          .input-field:focus { border-color: #3b9b88; background: #fff; box-shadow: 0 0 0 3px rgba(59, 155, 136, 0.1); }
          .btn-primary { width: 100%; padding: 14px; background: linear-gradient(135deg, #3b9b88 0%, #2dd4bf 100%); color: #fff; border: none; border-radius: 8px; font-weight: 700; font-size: 16px; cursor: pointer; box-shadow: 0 4px 15px rgba(59, 155, 136, 0.4); transition: all 0.3s ease; }
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(59, 155, 136, 0.5); }
          .table-row { transition: all 0.3s ease; border-bottom: 1px solid #f3f4f6; }
          .table-row:hover { background: #f8fafc; transform: scale(1.01); box-shadow: 0 4px 10px rgba(0,0,0,0.02); }
          .sidebar-text { opacity: 0; transition: opacity 0.3s ease-in-out; white-space: nowrap; overflow: hidden; }
          .sidebar-text.open { opacity: 1; transition-delay: 0.1s; }
          .sidebar-item { transition: all 0.2s ease; }
          .sidebar-item:hover { background: rgba(255, 255, 255, 0.05) !important; color: #fff !important; transform: translateX(5px); }
        `}
      </style>

      {/* SIDEBAR */}
      <div style={{ width: sidebarOpen ? '260px' : '80px', background: 'linear-gradient(180deg, #0f172a 0%, #111827 100%)', color: 'white', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', zIndex: 100, boxShadow: '4px 0 24px rgba(0,0,0,0.2)', borderRight: '1px solid #1f2937' }}>
        <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ minWidth: '36px', width: '36px', height: '36px', background: 'linear-gradient(135deg, #3b9b88 0%, #2dd4bf 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px', color: '#fff', boxShadow: '0 0 15px rgba(59, 155, 136, 0.4)' }}>P</div>
          <h2 className={`sidebar-text ${sidebarOpen ? 'open' : ''}`} style={{ fontSize: '20px', fontWeight: '800', margin: 0, background: 'linear-gradient(to right, #ffffff, #a7f3d0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>PAK SMM</h2>
        </div>

        <div style={{ flex: 1, paddingTop: '20px', overflowY: 'auto', overflowX: 'hidden' }}>
          {menuItems.map((item, index) => {
            const isActive = activeTab === item.name;
            return (
              <div key={index} onClick={() => setActiveTab(item.name)} className="sidebar-item" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 20px', margin: '4px 12px', cursor: 'pointer', borderRadius: '8px', color: isActive ? '#fff' : '#9ca3af', background: isActive ? 'linear-gradient(90deg, rgba(59, 155, 136, 0.2) 0%, rgba(59, 155, 136, 0.05) 100%)' : 'transparent', borderLeft: isActive ? '3px solid #3b9b88' : '3px solid transparent', whiteSpace: 'nowrap', fontSize: '14px', fontWeight: isActive ? '600' : '500', position: 'relative' }}>
                <svg style={{ minWidth: '20px', color: isActive ? '#3b9b88' : 'currentColor', filter: isActive ? 'drop-shadow(0 0 5px rgba(59, 155, 136, 0.5))' : 'none' }} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d={item.icon}></path></svg>
                <span className={`sidebar-text ${sidebarOpen ? 'open' : ''}`}>{item.name}</span>
                {isActive && sidebarOpen && <div style={{ position: 'absolute', right: '15px', width: '6px', height: '6px', background: '#3b9b88', borderRadius: '50%', boxShadow: '0 0 10px #3b9b88' }}></div>}
              </div>
            );
          })}
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', padding: '12px', color: '#fca5a5', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', transition: 'all 0.3s', overflow: 'hidden' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; e.currentTarget.style.color = '#fca5a5'; }}>
            <svg style={{ minWidth: '20px' }} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            <span className={`sidebar-text ${sidebarOpen ? 'open' : ''}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, marginLeft: sidebarOpen ? '260px' : '80px', transition: 'margin 0.3s', display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* TOPBAR */}
        <div style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#6b7280', display: 'flex', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div>
              <h2 style={{ fontSize: '18px', color: '#111827', fontWeight: '700', margin: 0 }}>{activeTab}</h2>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Welcome back, {user.name || 'User'}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ position: 'relative', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
               <svg width="24" height="24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 0 2px #fff' }}></span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '6px', borderRadius: '30px', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <img src={`https://ui-avatars.com/api/?name=${user.name || 'User'}&background=3b9b88&color=fff&rounded=true`} alt="User" style={{ width: '36px', height: '36px', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
              <div style={{ display: 'none', md: 'block' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#111827' }}>{user.name || 'User'}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>Pro Member</div>
              </div>
            </div>
          </div>
        </div>

        {/* DYNAMIC PAGE CONTENT */}
        <div style={{ padding: '32px', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;