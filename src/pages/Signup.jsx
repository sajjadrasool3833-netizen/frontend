import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiFetch } from '../api';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Account Created! Please Login.');
        navigate('/');
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      alert('❌ Server se connect nahi ho paraha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0fdfa' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '20px' }}>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'username', 'password'].map((field) => (
            <div key={field} style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '14px', textTransform: 'capitalize' }}>{field}</label>
              <input 
                type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'} 
                name={field}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }} 
              />
            </div>
          ))}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: '#2e8b7b', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          Already have an account? <Link to="/" style={{ color: '#3b9b88', fontWeight: 'bold', textDecoration: 'none' }}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;