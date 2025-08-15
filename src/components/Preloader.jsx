import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const HummerPreloader = () => {
  const loaderVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  };

  return (
    <div className="hummer-preloader-container">
      <div className="hummer-preloader-content">
        {/* Animated ring */}
        <motion.div 
          className="hummer-loader-ring"
          variants={loaderVariants}
          animate="animate"
        >
          <div className="hummer-ring-track"></div>
          <div className="hummer-ring-progress"></div>
        </motion.div>
        
        {/* Centered logo with subtle pulse */}
        <motion.div 
          className="hummer-logo-center"
          variants={pulseVariants}
          animate="animate"
        >
          <svg viewBox="0 0 100 100" className="hummer-logo-svg">
            <path 
              d="M50 20 L80 50 L65 65 L50 50 L35 65 L20 50 Z" 
              className="hummer-logo-path"
            />
          </svg>
        </motion.div>
        
        {/* Loading text */}
        <div className="hummer-loading-text">
          <span>H</span>
          <span>U</span>
          <span>M</span>
          <span>M</span>
          <span>E</span>
          <span>R</span>
        </div>
      </div>
    </div>
  );
};

export default HummerPreloader;