import { useState } from 'react';

const faqData = [
  { q: 'How can I get started?', a: 'Simply create an account, add funds to your wallet, and select the service you need from our panel.' },
  { q: 'What features does the panel offer?', a: 'We offer a wide range of social media marketing services including Instagram followers, YouTube views, Facebook likes, and much more.' },
  { q: 'How can I contact support?', a: 'You can contact our 24/7 support team via the ticket system inside your dashboard or by emailing support@paksmmpanels.com.' },
  { q: 'Is there a trial period available?', a: 'We do not offer a free trial, but our services are extremely affordable. You can start with a small amount to test our services.' },
  { q: 'How do I reset my password?', a: 'Click on "Password Lost?" on the login screen. Enter your registered email address, and a password reset link will be sent to you.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '80px 0', background: '#f0fdfa' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find answers to commonly asked questions about our services.</p>
        
        <div>
          {faqData.map((item, index) => (
            <div key={index} style={{ background: '#fff', borderRadius: '8px', marginBottom: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
              <div 
                onClick={() => toggleFAQ(index)}
                style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <h3 style={{ fontSize: '16px', color: '#1e293b', fontWeight: '600' }}>{item.q}</h3>
                <span style={{ fontSize: '20px', transition: '0.3s', transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
              </div>
              <div style={{ maxHeight: openIndex === index ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out', padding: openIndex === index ? '0 20px 20px' : '0 20px' }}>
                <p style={{ fontSize: '14px', color: '#64748b' }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;