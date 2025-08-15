import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import './Testimonials.css';

const HummerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Hummer H2 Owner",
      rating: 5,
      content: "The battery jump starter saved me during a remote camping trip. The military-grade durability is no marketing gimmick - this thing works flawlessly in extreme conditions.",
      date: "March 15, 2023"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Off-Road Enthusiast",
      rating: 5,
      content: "I've tried many jump starters, but none compare to the power and reliability of this Hummer-branded unit. The 26800mAh capacity has bailed out my entire group multiple times.",
      date: "January 28, 2023"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Adventure Guide",
      rating: 4,
      content: "As someone who leads groups into remote areas, I trust this jump starter with my livelihood. It's started everything from ATVs to diesel trucks without fail.",
      date: "February 10, 2023"
    },
    {
      id: 4,
      name: "Emily Parker",
      role: "Overland Explorer",
      rating: 5,
      content: "The built-in flashlight and USB ports make this more than just a jump starter - it's become essential gear for all my expeditions. The rugged design handles abuse that would destroy other units.",
      date: "April 5, 2023"
    },
    {
      id: 5,
      name: "David Thompson",
      role: "Military Veteran",
      rating: 5,
      content: "This is the only piece of gear I've found that matches the reliability we expected from military equipment. It's survived sand, mud, and sub-zero temperatures without issue.",
      date: "December 18, 2022"
    },
    {
      id: 6,
      name: "Lisa Martinez",
      role: "RV Traveler",
      rating: 4,
      content: "After being stranded twice with dead batteries, I invested in this Hummer jump starter. It's started my RV's massive battery bank multiple times on a single charge.",
      date: "November 3, 2023"
    }
  ];

  // Navigation functions
  const nextTestimonial = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevTestimonial = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goToTestimonial = (index) => setCurrentIndex(index);

  // Star rating render
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar key={i} className={`hummer-testimonial-star ${i < rating ? 'filled' : ''}`} />
    ));
  };

  return (
    <section className="hummer-testimonial-section">
      <div className="hummer-testimonial-bg-overlay"></div>
      
      <div className="hummer-testimonial-container">
        <motion.div 
          className="hummer-testimonial-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="hummer-testimonial-subtitle">CLIENT FEEDBACK</span>
          <h2 className="hummer-testimonial-title">Proven Performance</h2>
        </motion.div>

        <div className="hummer-testimonial-content">
          <motion.div 
            className="hummer-testimonial-card"
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hummer-glow-border"></div>
            <div className="hummer-glow-border hummer-glow-border-delay"></div>
            <div className="hummer-testimonial-inner">
              <div className="hummer-testimonial-rating">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              <blockquote className="hummer-testimonial-text">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="hummer-testimonial-author">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
                <span>{testimonials[currentIndex].date}</span>
              </div>
            </div>
          </motion.div>

          <div className="hummer-testimonial-controls">  
            <div className="hummer-testimonial-pagination">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`hummer-testimonial-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HummerTestimonials;