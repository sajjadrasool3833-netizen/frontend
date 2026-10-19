const featuresData = [
  { 
    title: 'Explore Our Services', 
    desc: 'Discover the unique features that set us apart. Our commitment is to provide exceptional services tailored to your needs. Experience excellence with every interaction.',
    icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3b9b88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
  },
  { 
    title: 'Empowering Your Presence', 
    desc: 'Embark on a transformative journey with us. We empower your online presence, delivering unparalleled strategies. Discover excellence in every aspect of our services.',
    icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3b9b88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path><line x1="12" y1="10" x2="12" y2="14"></line></svg>
  },
  { 
    title: 'Explore Limitless Possibilities', 
    desc: 'Uncover new horizons and possibilities with us. We prioritize your journey, offering innovative solutions and ensuring a seamless experience. Ready to redefine success?',
    icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3b9b88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"></path><path d="M4 12a8 8 0 0 1 16 0"></path><path d="M8 12a4 4 0 0 1 8 0"></path><circle cx="12" cy="12" r="2"></circle><path d="M12 2v2"></path><path d="M4 6h2"></path><path d="M18 6h2"></path><path d="M12 22v-2"></path><path d="M20 16h2"></path><path d="M2 16h2"></path></svg>
  },
  { 
    title: 'Innovate Your Journey', 
    desc: 'Embark on an innovative journey with us. We prioritize your unique needs, offering creative solutions that redefine excellence. Ready to experience a new standard of success?',
    icon: <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3b9b88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path><circle cx="12" cy="14" r="1"></circle></svg>
  }
];

const Features = () => {
  return (
    <section style={{ background: '#3b9b88', padding: '60px 0 100px 0' }}>
      <div className="container">
        
        <h2 style={{ fontSize: '30px', color: '#fff', textAlign: 'center', marginBottom: '15px', fontWeight: '700', lineHeight: '1.4', maxWidth: '900px', margin: '0 auto 15px auto' }}>
          Elevate Your Presence with PAK SMM PANELS | Cheapest SMM Panel | Pakistan No.1 SMMPANEL
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '950px', margin: '0 auto 50px auto', fontSize: '14px', color: '#f0fdfa', lineHeight: '1.6', fontWeight: '500' }}>
          Discover the Power of PAK SMM PANELS | Cheapest SMM Panel | Pakistan No.1 SMMPANEL – Your Key to Social Media Excellence. Unleash unparalleled strategies for success. Are you ready to elevate your online presence?
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
          {featuresData.map((feature, index) => (
            <div key={index} style={{ background: '#fff', padding: '40px 30px', borderRadius: '10px', textAlign: 'left', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                {feature.icon}
              </div>

              <h3 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '15px', fontWeight: '700' }}>{feature.title}</h3>
              
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;