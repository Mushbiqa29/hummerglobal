import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  // Military-grade loading animations
  const dashGaugeVariants = {
    loading: {
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const progressBarVariants = {
    loading: {
      scaleX: [0, 1],
      transition: {
        duration: 3,
        ease: "linear"
      }
    }
  };

  const hummerLogoVariants = {
    pulse: {
      scale: [1, 1.03, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  return (
    <div className="military-preloader">
      {/* Tactical background */}
      <div className="tactical-overlay"></div>
      
      {/* Main container */}
      <div className="armored-loader">
        {/* Hummer badge */}
        <motion.div 
          className="hummer-badge"
          variants={hummerLogoVariants}
          animate="pulse"
        >
          <svg viewBox="0 0 100 100" className="badge-svg">
            <path d="M20,70 L30,50 L50,30 L70,50 L80,70 Z" className="badge-shape"/>
            <text x="50" y="60" className="badge-text">HUMMER</text>
          </svg>
        </motion.div>

        {/* Dashboard gauge cluster */}
        <div className="gauge-cluster">
          <motion.div 
            className="rpm-gauge"
            variants={dashGaugeVariants}
            animate="loading"
          >
            <div className="gauge-markings"></div>
            <div className="gauge-needle"></div>
          </motion.div>
          
          <div className="loading-indicator">
            <div className="status-led"></div>
            <span>SYSTEM INIT</span>
          </div>
        </div>

        {/* Military spec progress bar */}
        <div className="armored-progress">
          <motion.div 
            className="progress-bar"
            variants={progressBarVariants}
            animate="loading"
          ></motion.div>
          <div className="progress-ticks"></div>
        </div>

        {/* Technical readout */}
        <div className="technical-readout">
          <div className="readout-line">
            <span>VEHICLE SYSTEMS:</span>
            <span>CHECKING...</span>
          </div>
          <div className="readout-line">
            <span>ENGINE DIAG:</span>
            <span>PASS</span>
          </div>
          <div className="readout-line">
            <span>NAVIGATION:</span>
            <span>CALIBRATING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;