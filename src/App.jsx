import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages Import
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

// Navbar Links ke Pages Import
import Services from './pages/Services';
import Terms from './pages/Terms';
import API from './pages/API';
import Updates from './pages/Updates';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Navbar Links Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/api" element={<API />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;