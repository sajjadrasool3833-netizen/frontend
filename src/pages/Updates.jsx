import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Updates = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: '80px 20px', minHeight: '80vh', maxWidth: '800px' }}>
        <h1 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '20px' }}>Latest Updates</h1>
        
        <div style={{ borderLeft: '3px solid #3b9b88', paddingLeft: '20px', marginBottom: '30px' }}>
          <h3 style={{ color: '#1e293b', fontSize: '18px' }}>New Instagram Services Added!</h3>
          <p style={{ color: '#64748b', fontSize: '13px', marginTop: '5px' }}>Posted on 24th Oct 2023</p>
          <p style={{ color: '#475569', marginTop: '10px' }}>We have added new cheap Instagram followers and likes services.</p>
        </div>

        <div style={{ borderLeft: '3px solid #3b9b88', paddingLeft: '20px', marginBottom: '30px' }}>
          <h3 style={{ color: '#1e293b', fontSize: '18px' }}>Server Maintenance</h3>
          <p style={{ color: '#64748b', fontSize: '13px', marginTop: '5px' }}>Posted on 20th Oct 2023</p>
          <p style={{ color: '#475569', marginTop: '10px' }}>Our servers were upgraded for faster delivery.</p>
        </div>

        <br/>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default Updates;