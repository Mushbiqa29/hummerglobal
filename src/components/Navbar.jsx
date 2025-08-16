import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#hummer-services' },
    { name: 'Gallery', path: '/VideoGallery.jsx' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="nav-container">
        {/* Logo with Glow Effect */}
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-glow"></div>
          
          <motion.span 
            className="logo-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="logo-text-top">HUMMER</span>
            <span className="logo-text-bottom">GLOBAL</span>
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <a href={link.path} className="nav-link">
                <span className="link-text">{link.name}</span>
                <span className="link-glow"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Animated Hamburger */}
        <motion.button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="hamburger-line top"></span>
          <span className="hamburger-line middle"></span>
          <span className="hamburger-line bottom"></span>
        </motion.button>
      </div>

      {/* Mobile Menu with Glass Morphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-menu-glow"></div>
              <ul className="mobile-links">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1, type: 'spring' }}
                  >
                    <a 
                      href={link.path} 
                      className="mobile-link"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mobile-link-text">{link.name}</span>
                      <span className="mobile-link-glow"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;