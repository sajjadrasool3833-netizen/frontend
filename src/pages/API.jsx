import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const API = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: '80px 20px', minHeight: '80vh', maxWidth: '800px' }}>
        <h1 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '20px' }}>API Documentation</h1>
        <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>Integrate our services into your own panel using our powerful API.</p>
        <div style={{ background: '#1e293b', color: '#fff', padding: '20px', borderRadius: '8px', fontFamily: 'monospace' }}>
          POST /api/v2<br/>
          Key: YOUR_API_KEY<br/>
          Action: add<br/>
          Service: 1001<br/>
          Link: https://insta.com/user<br/>
          Quantity: 1000
        </div>
        <br/><br/>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default API;