import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Steps from '../components/Steps';           // <-- Naya Add Kiya
import Testimonials from '../components/Testimonials'; // <-- Naya Add Kiya
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Steps />         {/* <-- Yahan Add Kiya */}
      <Testimonials />  {/* <-- Yahan Add Kiya */}
      <FAQ />
      <footer style={{ background: '#fff', padding: '20px 0', textAlign: 'center', fontSize: '14px', borderTop: '1px solid #e2e8f0' }}>
        &copy; Copyright. All Rights Reserved. <strong>PAK SMM PANELS</strong>
      </footer>
    </div>
  );
};

export default Home;