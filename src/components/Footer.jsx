import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiYoutube, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi';
import './Footer.css';

const HummerFooter = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '#about' },
        { name: 'Products', path: '#products' },
        { name: 'Services', path: '#services' },
        { name: 'Testimonials', path: '#testimonials' }
      ]
    },
    {
      title: 'Our Products',
      links: [
        { name: 'Jump Starters', path: '#' },
        { name: 'Battery Packs', path: '#' },
        { name: 'Power Solutions', path: '#' },
        { name: 'Accessories', path: '#' },
        { name: 'Emergency Kits', path: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiInstagram />, url: 'https://instagram.com' },
    { icon: <FiFacebook />, url: 'https://facebook.com' },
    { icon: <FiYoutube />, url: 'https://youtube.com' },
    { icon: <FiLinkedin />, url: '#' },
    { icon: <FiTwitter />, url: '#' }
  ];

  return (
    <footer className="hummer-footer">
      {/* Main Footer Content */}
      <div className="hummer-footer__main">
        <div className="hummer-footer__container">
          {/* Brand Column */}
          <motion.div 
            className="hummer-footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="logo-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="logo-glow"></div>
              <motion.span className="logo-text">
                <span className="logo-text-top">HUMMER</span>
                <span className="logo-text-bottom">GLOBAL</span>
              </motion.span>
            </motion.div>
            
            <p className="hummer-footer__description">
              Military-grade power solutions for automotive excellence. Authorized distributor of premium Hummer products.
            </p>
            
            <div className="hummer-footer__socials">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hummer-footer__social-link"
                  whileHover={{ 
                    y: -5,
                    background: 'rgba(255, 69, 0, 0.2)',
                    borderColor: 'rgba(255, 69, 0, 0.5)'
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <motion.div 
              className="hummer-footer__links"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="hummer-footer__links-title">{section.title}</h3>
              <ul className="hummer-footer__links-list">
                {section.links.map((link, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link to={link.path} className="hummer-footer__link">
                      <span className="hummer-footer__link-arrow">→</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div 
            className="hummer-footer__contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="hummer-footer__links-title">Contact Us</h3>
            <ul className="hummer-footer__contact-list">
              <li>
                <HiOutlineLocationMarker className="hummer-footer__contact-icon" />
                <span>30/41-D, Hindusthan Complex, Coimbatore-641006</span>
              </li>
              <li>
                <HiOutlinePhone className="hummer-footer__contact-icon" />
                <div>
                  <a href="tel:+919344850430">+91 9344850430</a>
                  <a href="tel:+918807065445">+91 8807065445</a>
                </div>
              </li>
              <li>
                <FiMail className="hummer-footer__contact-icon" />
                <a href="mailto:sadha30r@gmail.com">sadha30r@gmail.com</a>
              </li>
              <li>
                <HiOutlineClock className="hummer-footer__contact-icon" />
                <span>Mon-Sun: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="hummer-footer__bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="hummer-footer__container">
          <p className="hummer-footer__copyright">
            &copy; {new Date().getFullYear()} Hummer Global Automobiles. All rights reserved.
          </p>
          <div className="hummer-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/warranty">Warranty</Link>
          </div>
        </div>
      </motion.div>

     
    </footer>
  );
};

export default HummerFooter;