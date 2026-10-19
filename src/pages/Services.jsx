import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center', minHeight: '80vh' }}>
        <h1 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '20px' }}>Our Services</h1>
        <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '40px' }}>We provide the cheapest SMM services in Pakistan.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {['Instagram Followers', 'YouTube Views', 'Facebook Likes', 'TikTok Followers'].map((service, i) => (
             <div key={i} style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <h3 style={{ color: '#3b9b88', marginBottom: '10px' }}>{service}</h3>
                <p style={{ color: '#64748b', fontSize: '14px' }}>High quality and fast delivery.</p>
             </div>
          ))}
        </div>
        <br/><br/>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default Services;