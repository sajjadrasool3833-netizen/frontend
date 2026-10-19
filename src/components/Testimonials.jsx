const Testimonials = () => {
  return (
    <section style={{ background: '#3b9b88', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="section-title" style={{ color: '#fff' }}>Unlocking Possibilities</h2>
        <p className="section-subtitle" style={{ color: '#fff' }}>
          Experience a journey of innovation and excellence. Our commitment is to redefine possibilities. Are you ready to embark on a transformative adventure?
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
          
          {/* Left Arrow */}
          <button style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer', opacity: '0.7' }}>
            &#10094;
          </button>

          {/* Cards Container */}
          <div style={{ display: 'flex', gap: '30px', flex: '1' }}>
            
            {/* Card 1 */}
            <div style={{ background: '#fff', padding: '35px', borderRadius: '12px', flex: '1', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ width: '50px', height: '50px', background: '#fde68a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  👩
                </div>
                <h4 style={{ color: '#1e293b', fontSize: '16px', margin: 0 }}>Happy Customer</h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.8' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#1e293b' }}>✔</span> Always double-check the link, quantity, and service name before submitting your order. Invalid links, private accounts, or wrong formats will result in failed orders and no refund.
                </li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#1e293b' }}>✔</span> We are not responsible for errors caused by client negligence. By placing an order, you agree to our terms.
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#1e293b' }}>✔</span> For any issue, use the support or ticket system. Avoid spamming orders or it may lead to account suspension.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#fff', padding: '35px', borderRadius: '12px', flex: '1', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ width: '50px', height: '50px', background: '#bfdbfe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  👨
                </div>
                <h4 style={{ color: '#1e293b', fontSize: '16px', margin: 0 }}>Satisfied User</h4>
              </div>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: 0 }}>
                Discovering the features and capabilities of this panel has been outstanding. The commitment to efficiency and excellence in service is truly impressive. Ready to redefine your experience?
              </p>
            </div>

          </div>

          {/* Right Arrow */}
          <button style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer', opacity: '0.7' }}>
            &#10095;
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;