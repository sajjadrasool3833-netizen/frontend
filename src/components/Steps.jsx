const Steps = () => {
  return (
    <section style={{ padding: '80px 0', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <h2 className="section-title">Step into Innovation</h2>
        <p className="section-subtitle">
          At the forefront of innovation, we guide you through each step with a commitment to meeting your unique needs. Our creative solutions redefine excellence, setting a new standard for success. Join us on this transformative journey!
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '50px', position: 'relative' }}>
          
          {/* Step 1 */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '90px', height: '90px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', color: '#1e293b', margin: '0 auto 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>1</div>
            <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '10px' }}>Start Your Journey</h4>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', padding: '0 10px' }}>
              Embark on the first step confidently, guided by our expertise. Discover a path tailored to your needs and set the foundation for a successful journey.
            </p>
          </div>

          {/* Arrow 1 to 2 */}
          <div style={{ position: 'absolute', top: '35px', left: '22%', width: '100px', height: '40px', pointerEvents: 'none' }}>
            <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30 Q 50 0 95 15" stroke="#3b9b88" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
              <path d="M90 5 L 98 16 L 85 18" stroke="#3b9b88" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Step 2 */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '90px', height: '90px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', color: '#1e293b', margin: '0 auto 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>2</div>
            <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '10px' }}>Explore Opportunities</h4>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', padding: '0 10px' }}>
              Easy Steps. Elevate your experience with tailored solutions. Discover new horizons and enjoy a journey of innovation. Uncover the path to success, designed just for you.
            </p>
          </div>

          {/* Arrow 2 to 3 */}
          <div style={{ position: 'absolute', top: '80px', left: '47%', width: '100px', height: '40px', pointerEvents: 'none' }}>
             <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 Q 50 40 95 25" stroke="#3b9b88" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
              <path d="M90 35 L 98 24 L 85 22" stroke="#3b9b88" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Step 3 */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '90px', height: '90px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', color: '#1e293b', margin: '0 auto 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>3</div>
            <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '10px' }}>Enhance Your Journey</h4>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', padding: '0 10px' }}>
              Elevate your experience with tailored solutions. Discover new horizons and enjoy a journey of innovation. Uncover the path to success, designed just for you.
            </p>
          </div>

          {/* Arrow 3 to 4 */}
          <div style={{ position: 'absolute', top: '35px', left: '72%', width: '100px', height: '40px', pointerEvents: 'none' }}>
            <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30 Q 50 0 95 15" stroke="#3b9b88" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
              <path d="M90 5 L 98 16 L 85 18" stroke="#3b9b88" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Step 4 */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '90px', height: '90px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', color: '#1e293b', margin: '0 auto 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>4</div>
            <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '10px' }}>Achieve Excellence</h4>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', padding: '0 10px' }}>
              Step into excellence with confidence. Explore unparalleled solutions tailored to your goals. Experience a journey of success designed to elevate your endeavors.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;