import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const HummerServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Auto-rotate services every 8 seconds
  useEffect(() => {
    let interval;
    if (autoRotate && inView) {
      interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % servicesData.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [autoRotate, inView]);

  const servicesData = [
    {
      title: 'Vehicle Service',
      image: 'https://hummerglobalautomobiles.com/img/service4.jpg',
      description: 'Premium maintenance solutions for Hummer vehicles including routine checkups, performance tuning, and specialized diagnostics.',
      highlights: [
        'Military-grade durability checks',
        'Performance optimization',
        'Advanced diagnostic systems'
      ],
      stats: [
        { value: '98%', label: 'Success Rate' },
        { value: '24h', label: 'Response Time' },
        { value: '500+', label: 'Vehicles Serviced' }
      ],
      icon: (
        <svg className="service-icon" viewBox="0 0 24 24">
          <path d="M19.5 12c0-1.653-1.347-3-3-3s-3 1.347-3 3 1.347 3 3 3 3-1.347 3-3zm-15 0c0-1.653 1.347-3 3-3s3 1.347 3 3-1.347 3-3 3-3-1.347-3-3zm15.5-3h-2v-1h2v1zm-15 0h-2v-1h2v1zm15.5-3h-2v-1h2v1zm-15 0h-2v-1h2v1zm15.5-3h-2v-1h2v1zm-15 0h-2v-1h2v1zm15.5 15h-2v-1h2v1zm-15 0h-2v-1h2v1zm15.5 3h-2v-1h2v1zm-15 0h-2v-1h2v1zm15.5 3h-2v-1h2v1zm-15 0h-2v-1h2v1z"/>
        </svg>
      ),
      color: 'var(--color-primary)'
    },
    {
      title: 'Battery Systems',
      image: 'https://hummerglobalautomobiles.com/img/service2.jpg',
      description: 'Cutting-edge lithium-ion technology with 26800mAh capacity designed specifically for Hummer power requirements.',
      highlights: [
        'High-density energy cells',
        'Thermal protection system',
        'Rapid recharge capability'
      ],
      stats: [
        { value: '10Y', label: 'Warranty' },
        { value: '95%', label: 'Efficiency' },
        { value: '30m', label: 'Fast Charge' }
      ],
      icon: (
        <svg className="service-icon" viewBox="0 0 24 24">
          <path d="M7 4v16h10v-16h-10zm-2-2h14v20h-14v-20zm4 6h6v8h-6v-8zm1 1v6h4v-6h-4zm-3 10h12v2h-12v-2z"/>
        </svg>
      ),
      color: 'var(--color-secondary)'
    },
    {
      title: 'Power Connections',
      image: 'https://hummerglobalautomobiles.com/img/service3.jpg',
      description: 'Heavy-duty connection systems built to withstand extreme conditions and provide reliable power transfer.',
      highlights: [
        'Corrosion-resistant terminals',
        'Spark-proof technology',
        'Dual-connection points'
      ],
      stats: [
        { value: '50k', label: 'Cycles' },
        { value: '99.9%', label: 'Reliability' },
        { value: 'IP68', label: 'Rating' }
      ],
      icon: (
        <svg className="service-icon" viewBox="0 0 24 24">
          <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2v-6zm.99-5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>
      ),
      color: 'var(--color-tertiary)'
    },
    {
      title: 'Emergency Support',
      image: 'https://hummerglobalautomobiles.com/img/service4.jpg',
      description: '24/7 emergency support with rapid response teams equipped to handle any Hummer power situation.',
      highlights: [
        'On-site jump starts',
        'Battery replacement',
        'System diagnostics'
      ],
      stats: [
        { value: '24/7', label: 'Availability' },
        { value: '45m', label: 'Avg. Response' },
        { value: '100%', label: 'Coverage' }
      ],
      icon: (
        <svg className="service-icon" viewBox="0 0 24 24">
          <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2v-6zm0 8h2v2h-2v-2z"/>
        </svg>
      ),
      color: 'var(--color-accent)'
    }
  ];

  const handleServiceChange = (index) => {
    setIsLoading(true);
    setActiveService(index);
    setAutoRotate(false);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <section className="hummer-services-section" ref={ref} id="hummer-services">
      {/* Animated grid background */}
      <div className="service-grid-bg">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div 
            key={`grid-${i}`}
            className="grid-cell"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.03 } : {}}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        ))}
      </div>
      
     

      <div className="hummer-services-container">
        <motion.div
          className="hummer-services-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="hummer-services-subtitle">Premium Care</span>
          <h2 className="hummer-services-title">
            <span className="title-gradient">Military-Grade</span> Service Solutions
          </h2>
          <p className="hummer-services-intro">Professional maintenance for your Hummer's peak performance</p>
        </motion.div>
        
        <div className="hummer-services-wrapper">
          <div className="hummer-service-selector">
            {servicesData.map((service, index) => (
              <motion.button
                key={`service-${index}`}
                className={`hummer-service-tab ${activeService === index ? 'hummer-service-active' : ''}`}
                onClick={() => handleServiceChange(index)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(139, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="hummer-service-icon">{service.icon}</span>
                <span className="hummer-service-name">{service.title}</span>
                {activeService === index && (
                  <motion.div 
                    className="active-indicator"
                    layoutId="activeIndicator"
                    style={{ backgroundColor: service.color }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              className="hummer-service-display"
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="hummer-service-visual">
                <div className="corner-frame top-left"></div>
                <div className="corner-frame top-right"></div>
                <div className="corner-frame bottom-left"></div>
                <div className="corner-frame bottom-right"></div>
                
                <img 
                  src={servicesData[activeService].image} 
                  alt={servicesData[activeService].title} 
                  className="hummer-service-image"
                />
                <div className="hummer-service-overlay" 
                  style={{ background: `linear-gradient(135deg, ${servicesData[activeService].color}20 0%, transparent 100%)` }}>
                </div>
                
                {/* Stats overlay */}
                <div className="service-stats-overlay">
                  {servicesData[activeService].stats.map((stat, i) => (
                    <motion.div 
                      key={`stat-${i}`}
                      className="stat-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="stat-value" style={{ color: servicesData[activeService].color }}>
                        {stat.value}
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="hummer-service-details">
                <motion.h3 
                  className="hummer-service-detail-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {servicesData[activeService].title}
                </motion.h3>
                
                <motion.p 
                  className="hummer-service-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {servicesData[activeService].description}
                </motion.p>
                
                <ul className="hummer-service-features">
                  {servicesData[activeService].highlights.map((feature, index) => (
                    <motion.li
                      key={`feature-${index}`}
                      className="hummer-service-feature"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="hummer-feature-marker" 
                        style={{ backgroundColor: servicesData[activeService].color }}></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  className="hummer-service-cta"
                  style={{ 
                    background: `linear-gradient(90deg, ${servicesData[activeService].color}, ${servicesData[activeService].color}80)`,
                    boxShadow: `0 4px 15px ${servicesData[activeService].color}40`
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 5px 20px ${servicesData[activeService].color}60`
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="cta-shimmer"></span>
                  Explore Service
                  <span className="hummer-cta-arrow">→</span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HummerServices;