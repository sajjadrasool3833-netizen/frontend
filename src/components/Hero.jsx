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

  // Google Login Demo Handler
  const handleGoogleLogin = () => {
    alert('Google Sign-in coming soon! (Backend integration required)');
    // Asal mein yahan Google OAuth ka link aayega
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
                {loading ? 'Signing in...' : 'Sign in'}
              </button>

              {/* Divider OR */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #e2e8f0' }} />
                <span style={{ padding: '0 10px', fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>OR</span>
                <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #e2e8f0' }} />
              </div>

              {/* Google Login Button */}
              <button 
                type="button" 
                onClick={handleGoogleLogin}
                style={{ width: '100%', padding: '12px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: '#475569', cursor: 'pointer', marginBottom: '20px', transition: 'background 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
              >
                {/* Google SVG Logo */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
              
              <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
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