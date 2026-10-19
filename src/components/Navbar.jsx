import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      background: '#fff', 
      padding: '15px 0', 
      borderBottom: '1px solid #f1f5f9',
      position: 'sticky', // <-- Yeh line navbar ko fix rakhegi
      top: 0,             // <-- Top par chipka rahega
      zIndex: 1000,       // <-- Taake content iske upar na aaye
      boxShadow: '0 2px 10px rgba(0,0,0,0.02)' // Halka sa shadow fix hone par acha lagta hai
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', fontSize: '22px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span style={{ color: '#3b9b88' }}>PAK</span>
          <span style={{ color: '#94a3b8', fontWeight: '400' }}>SMMPANELS</span>
          <span style={{ fontSize: '14px', marginLeft: '2px', position: 'relative', top: '-8px', color: '#94a3b8' }}>✨</span>
        </Link>

        {/* Links */}
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', alignItems: 'center' }}>
          <li><Link to="/services" style={{ textDecoration: 'none', color: '#64748b', fontSize: '14px', fontWeight: '500' }}>Services</Link></li>
          <li><Link to="/terms" style={{ textDecoration: 'none', color: '#64748b', fontSize: '14px', fontWeight: '500' }}>Terms</Link></li>
          <li><Link to="/api" style={{ textDecoration: 'none', color: '#64748b', fontSize: '14px', fontWeight: '500' }}>API</Link></li>
          
          {/* Login Home page par le jayega */}
          <li><Link to="/" style={{ textDecoration: 'none', color: '#64748b', fontSize: '14px', fontWeight: '500' }}>Login</Link></li>
          
          <li><Link to="/signup" style={{ textDecoration: 'none', color: '#64748b', fontSize: '14px', fontWeight: '500' }}>Signup</Link></li>
          
          {/* Updates (Agar aap chahte hain Home par jaye toh "/" rakhein, ya nayi page ke liye "/updates") */}
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: '#64748b', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
               Updates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;