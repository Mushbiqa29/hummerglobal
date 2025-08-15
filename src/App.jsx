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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <Preloader />
        ) : (
          <div className="App">
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
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;