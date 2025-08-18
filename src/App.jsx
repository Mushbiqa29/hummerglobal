import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faBars, faTimes);
// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoGallery from './components/VideoGallery';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 4000);

    // Handle scroll for zoom effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <Preloader />
        ) : (
          <div className={`App ${scrolled ? 'scrolled' : ''}`}>
            {/* Fixed Zooming Background */}
            <div className="site-background"></div>
            
            {/* Content Container */}
            <div className="content-container">
              <Navbar />
              
              <main>
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <About />
                      <Features />
                      <Services />
                      <Testimonials />
                      <Contact />
                    </>
                  } />
                  <Route path="/videoGallery.jsx" element={<VideoGallery />} />
                </Routes>
              </main>
              
              <Footer />
            </div>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;