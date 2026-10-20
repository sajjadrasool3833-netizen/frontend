import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../api';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setErrorMsg(data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMsg('Server se connect nahi ho paraha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        
        <div>
          <h1 style={{ fontSize: '34px', color: '#1e293b', lineHeight: '1.3', marginBottom: '20px', fontWeight: '700' }}>
            Welcome to PAK SMM PANELS | Cheapest SMM Panel
          </h1>
          <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
            🚀 Boost Your Online Presence | Instant Delivery
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '100%', maxWidth: '420px' }}>
            <form onSubmit={handleLogin}>
              
              {errorMsg && <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '13px' }}>{errorMsg}</div>}

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc', outline: 'none' }} 
                  required
                />
              </div>

              <div style={{ marginBottom: '20px', position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Password</label>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', paddingRight: '10px' }}>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '12px', border: 'none', background: 'transparent', outline: 'none' }} 
                    required
                  />
                  <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', color: '#64748b', userSelect: 'none' }}>
                    {showPassword ? '👁️' : '🙈'}
                  </span>
                </div>
              </div>

              <button type="submit" disabled={loading} style={{ marginBottom: '15px', width: '100%', padding: '14px', background: '#2e8b7b', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Signing in...' : 'Sign in?'}
              </button>
              
              <p style={{ textAlign: 'center', fontSize: '14px' }}>
                Don't have an account? <span style={{ color: '#3b9b88', fontWeight: '600', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;