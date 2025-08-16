import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroVideo from '../assets/hummer.gif';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [animate, setAnimate] = useState(false);

  const textContent = [
    {
      main: [
        { text: "The", color: "#000000" },
        { text: " ULTIMATE ", color: "#B22222" },
        { text: "Power Charging Solution", color: "#000000" }
      ],
      sub: "Stay charged on-the-go with our Road Warrior Car Power Bank! This powerful 20,000MAH battery pack is designed to keep your devices charged while driving, camping, or on any adventure."
    },
    {
      main: [
        { text: "Discover the Power of", color: "#000000" },
        { text: " Ingenious ", color: "#B22222" },
        { text: "Design", color: "#000000" }
      ],
      sub: "Expert care for your two-wheeler, regardless of brand. Our skilled technicians provide top-notch service and repairs. Trust us to get you back on the road, quickly and safely."
    }
  ];

  // Text animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % textContent.length);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-container">
          <h1 className={`main-text ${animate ? 'text-animate' : ''}`}>
            {textContent[currentText].main.map((part, i) => (
              <span key={i} style={{ color: part.color }}>
                {part.text}
              </span>
            ))}
          </h1>
          <p className="subtext">{textContent[currentText].sub}</p>
          <button className="cta-button">Explore Products</button>
        </div>
      </div>

      <div className="video-background">
        <img src={heroVideo} alt="Product demonstration" />
      </div>
    </section>
  );
};

export default Hero;