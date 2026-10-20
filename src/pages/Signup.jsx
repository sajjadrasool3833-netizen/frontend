import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiFetch } from '../api';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    if (!isCaptchaVerified) return alert('Please verify you are human.');

    setLoading(true);

    try {
      const response = await apiFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // YAHAN UPDATE HUA HAI: Token aur User save karke Dashboard bhej rahe hain
        if (data.token && data.user) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        
        alert('✅ Account Created Successfully! Welcome to Dashboard.');
        navigate('/dashboard');
        
      } else {
        alert(`❌ ${data.message || 'Signup failed'}`);
      }
    } catch (error) {
      alert('❌ Server se connect nahi ho paraha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '480px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e3a8a', margin: '0 0 8px 0' }}>Sign Up</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Please enter details below to create account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a8a', marginBottom: '8px' }}>First Name <span style={{ color: 'red' }}>*</span></label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', border: errors.firstName ? '1px solid #ef4444' : '1px solid #cbd5e1', borderRadius: '8px', background: '#f1f5f9', outline: 'none', fontSize: '14px' }} />
              {errors.firstName && <p style={{ color: '#ef4444', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.firstName}</p>}
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a8a', marginBottom: '8px' }}>Last Name <span style={{ color: 'red' }}>*</span></label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', border: errors.lastName ? '1px solid #ef4444' : '1px solid #cbd5e1', borderRadius: '8px', background: '#f1f5f9', outline: 'none', fontSize: '14px' }} />
              {errors.lastName && <p style={{ color: '#ef4444', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.lastName}</p>}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a8a', marginBottom: '8px' }}>Email <span style={{ color: 'red' }}>*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', border: errors.email ? '1px solid #ef4444' : '1px solid #cbd5e1', borderRadius: '8px', background: '#f1f5f9', outline: 'none', fontSize: '14px' }} />
            {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.email}</p>}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e3a8a', marginBottom: '8px' }}>Password <span style={{ color: 'red' }}>*</span></label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', border: errors.password ? '1px solid #ef4444' : '1px solid #cbd5e1', borderRadius: '8px', background: '#f1f5f9', outline: 'none', fontSize: '14px' }} />
            {errors.password && <p style={{ color: '#ef4444', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.password}</p>}
          </div>

          <div onClick={() => setIsCaptchaVerified(true)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#f8fafc', marginBottom: '25px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '4px', border: '2px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isCaptchaVerified ? '#3b82f6' : '#fff', color: '#fff', fontWeight: 'bold' }}>{isCaptchaVerified && '✔'}</div>
              <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>{isCaptchaVerified ? 'Success!' : 'Verify you are human'}</span>
            </div>
            <div style={{ textAlign: 'right' }}><div style={{ fontSize: '10px', fontWeight: '800', color: '#f97316', letterSpacing: '1px' }}>CLOUDFLARE</div></div>
          </div>

          <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            {loading ? 'Creating Account...' : 'Create Account →'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#64748b' }}>
          Already have an account? <Link to="/" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;