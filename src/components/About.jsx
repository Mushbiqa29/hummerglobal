import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

// Icons
import { FiBattery, FiZap, FiActivity, FiAward, FiUsers, FiTool } from 'react-icons/fi';

const About = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const [scrolled, setScrolled] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.95, 0.95, 1]);

  // Handle scroll for zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counting animation
  useEffect(() => {
    if (inView) {
      const targetValues = [26800, 3500, 12, 25, 500, 10];
      const durations = [2500, 2000, 1500, 1800, 2200, 1600];
      
      targetValues.forEach((target, index) => {
        let start = 0;
        const increment = target / (durations[index] / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }, 16);
      });
    } else {
      setCounts([0, 0, 0, 0, 0, 0]);
    }
  }, [inView]);

  const featureCards = [
    {
      icon: <FiBattery className="feature-icon" />,
      title: 'Battery Capacity',
      description: 'Our jump starters feature a high battery capacity of 26800mAh, ensuring multiple starts on a single charge. This makes it perfect for long trips or emergencies.',
      count: counts[0],
      unit: 'mAh'
    },
    {
      icon: <FiZap className="feature-icon" />,
      title: 'Amperage',
      description: 'Equipped with 3500 AMPs, our jump starters provide the power needed to start even the largest engines, including SUVs, trucks, and heavy-duty machinery.',
      count: counts[1],
      unit: 'AMPs'
    },
    {
      icon: <FiActivity className="feature-icon" />,
      title: 'Voltage',
      description: 'The device operates at 12V, offering compatibility with a wide range of vehicles. It features dual-terminal connections for enhanced flexibility and ease of use.',
      count: counts[2],
      unit: 'Volts'
    }
  ];

  const statCards = [
    {
      icon: <FiAward className="stat-icon" />,
      title: 'Years Experience',
      count: counts[3],
      unit: '+'
    },
    {
      icon: <FiTool className="stat-icon" />,
      title: 'Expert Technicians',
      count: counts[4],
      unit: '+'
    },
    {
      icon: <FiUsers className="stat-icon" />,
      title: 'Satisfied Clients',
      count: counts[5],
      unit: '+'
    }
  ];

  return (
    <section className={`about-section ${scrolled ? 'scrolled' : ''}`} id="about" ref={ref}>
      {/* Fixed Background */}
      <div className="fixed-background">
        <div className="background-overlay"></div>
      </div>

      <div className="container">
        {/* Feature Cards Grid - Now placed above content */}
        <div className="feature-cards-container">
          <motion.div 
            className="feature-cards-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={`feature-${index}`}
                className="feature-card"
                whileHover={{ 
                  y: -15,
                  boxShadow: '0 20px 40px rgba(139, 0, 0, 0.4)'
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    {card.icon}
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <div className="card-counter">
                  <span className="counter-value">{card.count}</span>
                  <span className="counter-unit">{card.unit}</span>
                </div>
                <p className="card-description">{card.description}</p>
                <div className="card-hover-line"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          <motion.div
            className="content-wrapper"
            style={{ y: yPos, opacity }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h6 className="section-subtitle">
              <span className="title-divider"></span>
              HUMMER AUTHORIZED DISTRIBUTOR
            </h6>
            <h2 className="section-title">
              <span className="title-gradient">POWER</span> REDEFINED
            </h2>
            <p className="section-description">
              Global Automobiles brings you military-grade power solutions with Hummer's legendary 
              durability. Our products are engineered to perform in extreme conditions with 
              uncompromising reliability and cutting-edge technology.
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              {statCards.map((stat, index) => (
                <motion.div
                  key={`stat-${index}`}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 15px 30px rgba(139, 0, 0, 0.3)'
                  }}
                >
                  <div className="stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <span className="stat-count">{stat.count}{stat.unit}</span>
                    <h5 className="stat-title">{stat.title}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;