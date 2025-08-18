import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import images directly
import card1 from '../assets/card1.avif';
import card2 from '../assets/card2.avif';
import card3 from '../assets/card3.avif';
import card4 from '../assets/card4.avif';
import card5 from '../assets/card5.webp';

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const herocards = [
    { 
      image: card1, 
      title: 'Premium Hummer Fleet', 
      cta: 'Experience luxury with our top-tier Hummer vehicles', 
      color: '#8B0000' // Dark Red
    },
    { 
      image: card2, 
      title: 'Weekend Getaways', 
      cta: 'Book your perfect weekend adventure vehicle', 
      color: '#A52A2A' // Brown-Red
    },
    { 
      image: card3, 
      title: 'Corporate Rentals', 
      cta: 'Impress your clients with our executive vehicles', 
      color: '#A52A2A' // Burgundy
    },
    { 
      image: card4, 
      title: 'Off-Road Adventures', 
      cta: 'Conquer any terrain with our 4x4 Hummers', 
      color: '#A52A2A' // Wine
    },
    { 
      image: card5, 
      title: 'Long-Term Leasing', 
      cta: 'Special rates for extended rentals', 
      color: '#7C0A02' // Blood Red
    }
  ];

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % herocards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [herocards.length]);

  return (
    <section className="hero-section">
      <div className="hero-cards-container">
        {herocards.map((card, index) => (
          <div
            key={index}
            className={`hero-card ${index === activeIndex ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${card.image})`,
              '--accent-color': card.color
            }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="hero-card-content">
              <h1>{card.title}</h1>
              <div className="hero-card-cta">
                <p>{card.cta}</p>
                <button className="connect-button">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  ); 
};

export default ExpandingCards;