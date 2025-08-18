import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    let observer;

    const removeVismeBadge = () => {
      const badge = document.querySelector('.visme_badge');
      if (badge) {
        badge.style.display = 'none';
      }
    };

    const loadVismeScript = () => {
      if (!document.querySelector('script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        script.onload = () => {
          // small delay for iframe mount
          setTimeout(() => {
            setFormLoaded(true);
            removeVismeBadge();
          }, 300);
        };
        document.body.appendChild(script);
      }
    };

    // Load script only once
    loadVismeScript();

    // Watch DOM for iframe + badge
    observer = new MutationObserver(() => {
      const iframe = document.querySelector('.visme_d iframe');
      if (iframe && !formLoaded) {
        setFormLoaded(true);
      }
      removeVismeBadge();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observer) observer.disconnect();
    };
  }, []); // ✅ fixed dependency

  return (
    <section className="hummer-contact-section" id="contact" style={{ background: '#f9f9f9' }}>
      <div className="hummer-contact-container">
        <div className="hummer-contact-grid">
          {/* Left Side - Contact Info */}
          <motion.div
            className="hummer-contact-info"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hummer-contact-header">
              <span className="hummer-contact-subtitle">GET IN TOUCH</span>
              <h2 className="hummer-contact-title">Hummer Power Solutions</h2>
              <p className="hummer-contact-description">
                Certified distributor of military-grade power solutions. 
                Contact us for premium service and support.
              </p>
            </div>

            <div className="hummer-info-items">
              <div className="hummer-info-item">
                <div className="hummer-info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#8B0000"/>
                  </svg>
                </div>
                <div className="hummer-info-content">
                  <h4>Our Location</h4>
                  <p>30/41-D, Hindusthan Complex, Avarampalayam Main Road, Coimbatore-641 006</p>
                </div>
              </div>

              <div className="hummer-info-item">
                <div className="hummer-info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#8B0000"/>
                  </svg>
                </div>
                <div className="hummer-info-content">
                  <h4>Email Us</h4>
                  <p>sadha30r@gmail.com</p>
                </div>
              </div>

              <div className="hummer-info-item">
                <div className="hummer-info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="#8B0000"/>
                  </svg>
                </div>
                <div className="hummer-info-content">
                  <h4>Call Us</h4>
                  <p>+91 9344850430</p>
                  <p>+91 8807065445</p>
                </div>
              </div>

              <div className="hummer-info-item">
                <div className="hummer-info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#8B0000"/>
                  </svg>
                </div>
                <div className="hummer-info-content">
                  <h4>Working Hours</h4>
                  <p>Mon-Fri: 9:00 AM - 9:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visme Form */}
          <motion.div
            className="hummer-visme-form-container"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {!formLoaded && (
              <div className="hummer-form-loader">
                <div className="hummer-spinner"></div>
              </div>
            )}

            <div
              className="visme_d"
              data-title="Simple Animated Contact Form"
              data-url="g0o9om7o-simple-animated-contact-form?sidebar=true"
              data-domain="forms"
              data-full-page="false"
              data-min-height="600px"
              data-form-id="140847"
              style={{ width: '100%', height: '100%' }}
            ></div>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Same styles, UI untouched */
        .hummer-contact-section { position: relative; padding: 8rem 0; background-size: cover; background-position: center; font-family: 'Poppins', sans-serif; overflow: hidden; }
        .hummer-contact-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 1; }
        .hummer-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hummer-contact-info { padding-right: 2rem; }
        .hummer-contact-header { margin-bottom: 3rem; }
        .hummer-contact-subtitle { display: inline-block; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 1rem; font-weight: 600; position: relative; color: #8B0000; }
        .hummer-contact-subtitle::after { content: ''; position: absolute; bottom: -8px; left: 0; width: 40px; height: 2px; background: linear-gradient(90deg, #8B0000, #FF4500); }
        .hummer-contact-title { font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 700; line-height: 1.2; color: #333; }
        .hummer-contact-description { font-size: 1.1rem; line-height: 1.8; color: #555; }
        .hummer-info-items { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 3rem; }
        .hummer-info-item { display: flex; gap: 1.5rem; align-items: flex-start; }
        .hummer-info-icon { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: rgba(139,0,0,0.1); border: 1px solid rgba(139,0,0,0.2); }
        .hummer-info-icon svg { width: 24px; height: 24px; }
        .hummer-info-content h4 { font-size: 1.2rem; margin-bottom: 0.5rem; color: #333; }
        .hummer-info-content p { font-size: 0.95rem; line-height: 1.6; margin: 0.25rem 0; color: #555; }
        .hummer-visme-form-container { background: white; border: 1px solid #e0e0e0; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 12px; overflow: hidden; height: 600px; position: relative; }
        .visme_badge { display: none !important; }
        .hummer-form-loader { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; background: white; z-index: 10; }
        .hummer-spinner { width: 50px; height: 50px; border: 5px solid rgba(139,0,0,0.1); border-top: 5px solid #8B0000; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @media (max-width: 992px) { .hummer-contact-grid { grid-template-columns: 1fr; } .hummer-contact-info { padding-right: 0; margin-bottom: 3rem; } .hummer-visme-form-container { height: 500px; } }
        @media (max-width: 768px) { .hummer-contact-section { padding: 6rem 0; } .hummer-contact-title { font-size: 2rem; } }
        @media (max-width: 576px) { .hummer-contact-container { padding: 0 1.5rem; } .hummer-contact-title { font-size: 1.8rem; } .hummer-info-item { flex-direction: column; gap: 1rem; } .hummer-info-icon { width: 40px; height: 40px; } .hummer-info-icon svg { width: 20px; height: 20px; } }
      `}</style>
    </section>
  );
};

export default Contact;
