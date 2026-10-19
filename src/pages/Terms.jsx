import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: '80px 20px', minHeight: '80vh', maxWidth: '800px' }}>
        <h1 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '20px' }}>Terms & Conditions</h1>
        <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '15px' }}>1. We do not offer refunds once the order is processed.</p>
        <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '15px' }}>2. Make sure your profile is public before placing an order.</p>
        <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '15px' }}>3. Do not place spam orders.</p>
        <br/>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default Terms;