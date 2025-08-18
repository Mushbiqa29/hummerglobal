import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="professional-contact-section">
      <div className="professional-contact-container">
        <div className="professional-contact-grid">
          {/* Left Side - Contact Info */}
          <div className="professional-contact-info">
            <div className="professional-contact-header">
              <span className="professional-contact-subtitle">Contact Us</span>
              <h2 className="professional-contact-title">Get in Touch</h2>
              <p className="professional-contact-description">
                Have questions about our services? Reach out to our team and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="professional-info-items">
              <div className="professional-info-item">
                <div className="professional-info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#8B0000"/>
                  </svg>
                </div>
                <div className="professional-info-content">
                  <h4>Email</h4>
                  <p>sadha30r@gmail.com</p>
                </div>
              </div>

              <div className="professional-info-item">
                <div className="professional-info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="#8B0000"/>
                  </svg>
                </div>
                <div className="professional-info-content">
                  <h4>Phone</h4>
                  <p>+91 9344850430</p>
                  <p>+91 8807065445</p>
                </div>
              </div>

              <div className="professional-info-item">
                <div className="professional-info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#8B0000"/>
                  </svg>
                </div>
                <div className="professional-info-content">
                  <h4>Location</h4>
                  <p>123 Business Avenue</p>
                  <p>City, State 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="professional-contact-form-wrapper">
            <form onSubmit={handleSubmit} className="professional-contact-form">
              <h3 className="form-title">Send Us a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="input-highlight"></span>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="input-highlight"></span>
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <span className="input-highlight"></span>
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="General Maintenance">General Maintenance</option>
                  <option value="Engine Repair">Engine Repair</option>
                  <option value="Brake Service">Brake Service</option>
                  <option value="Electrical Diagnostics">Electrical Diagnostics</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
                <svg viewBox="0 0 24 24" className="send-icon">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#fff"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .professional-contact-section {
          padding: 6rem 0;
          background: #f9f9f9;
          font-family: 'Poppins', sans-serif;
        }
        
        .professional-contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .professional-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
        }
        
        .professional-contact-info {
          background: #fff;
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .professional-contact-header {
          margin-bottom: 2.5rem;
        }
        
        .professional-contact-subtitle {
          display: inline-block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: #8B0000;
          font-weight: 600;
        }
        
        .professional-contact-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #333;
          font-weight: 700;
        }
        
        .professional-contact-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .professional-info-items {
          margin-top: auto;
        }
        
        .professional-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .professional-info-icon {
          width: 48px;
          height: 48px;
          background: rgba(139,0,0,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .professional-info-icon svg {
          width: 20px;
          height: 20px;
        }
        
        .professional-info-content h4 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: #333;
        }
        
        .professional-info-content p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0.2rem 0;
        }
        
        .professional-contact-form-wrapper {
          height: 100%;
        }
        
        .professional-contact-form {
          background: #fff;
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          height: 100%;
        }
        
        .form-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #333;
          font-weight: 600;
          position: relative;
        }
        
        .form-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 50px;
          height: 3px;
          background: #8B0000;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #8B0000;
        }
        
        .input-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #8B0000;
          transition: width 0.3s;
        }
        
        .form-group input:focus ~ .input-highlight {
          width: 100%;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238B0000'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0.8rem center;
          background-size: 1rem;
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-button {
          background: #8B0000;
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          transition: all 0.3s;
        }
        
        .submit-button:hover {
          background: #700000;
          transform: translateY(-2px);
        }
        
        .send-icon {
          width: 18px;
          height: 18px;
        }
        
        @media (max-width: 992px) {
          .professional-contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .professional-contact-info,
          .professional-contact-form {
            padding: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .professional-contact-section {
            padding: 4rem 0;
          }
          
          .professional-contact-container {
            padding: 0 1.5rem;
          }
          
          .professional-contact-title {
            font-size: 1.8rem;
          }
          
          .professional-info-item {
            flex-direction: column;
            gap: 1rem;
          }
          
          .professional-info-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;