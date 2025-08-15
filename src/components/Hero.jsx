import React, { useRef, useEffect, useState } from 'react';
import './Hero.css';
import heroVideo from '../assets/hummer.gif';

const Hero = () => {
  const canvasRef = useRef(null);
  const [currentText, setCurrentText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Text content that cycles
  const textContent = [
    {
      main: "The <span class='highlight'>ULTIMATE</span> Power Charging Solution",
      sub: "Stay charged on-the-go with our Road Warrior Car Power Bank! This powerful 20,000MAH battery pack is designed to keep your devices charged while driving, camping, or on any adventure.",
    },
    {
      main: "Discover the Power of <span class='highlight'>Ingenious</span> Design",
      sub: "Expert care for your two-wheeler, regardless of brand. Our skilled technicians provide top-notch service and repairs. Trust us to get you back on the road, quickly and safely.",
    },
  ];

  // Auto-animation effect
  useEffect(() => {
    let animationInterval;
    let textChangeInterval;

    const startAnimation = () => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    };

    // Change text every 5 seconds with animation
    textChangeInterval = setInterval(() => {
      startAnimation();
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % textContent.length);
      }, 1000);
    }, 5000);

    // Initial animation
    startAnimation();

    return () => {
      clearInterval(textChangeInterval);
      clearInterval(animationInterval);
    };
  }, []);

  // Particle effect with auto-animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particleArray = [];
    const mouse = { x: null, y: null, radius: 100 };

    // Auto-animation target (moves around automatically)
    const autoTarget = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 5,
      update: function() {
        // Change direction randomly
        if (Math.random() < 0.02) {
          this.speedX = (Math.random() - 0.5) * this.speed;
          this.speedY = (Math.random() - 0.5) * this.speed;
        }
        this.x += this.speedX || 0;
        this.y += this.speedY || 0;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
    };

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.color = color;
        this.density = Math.random() * 40 + 5;
        this.distance = 0;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        // Use autoTarget during animation, otherwise return to base
        const target = isAnimating ? autoTarget : { x: this.baseX, y: this.baseY };
        
        let dx = target.x - this.x;
        let dy = target.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (isAnimating) {
          // More dramatic movement during animation
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = 200;
          let force = (maxDistance - distance) / maxDistance;
          
          if (distance < maxDistance) {
            this.x += forceDirectionX * force * this.density * 0.2;
            this.y += forceDirectionY * force * this.density * 0.2;
          }
        } else {
          // Return to original position smoothly
          if (Math.abs(dx) > 0.5) {
            this.x += dx * 0.05;
          }
          if (Math.abs(dy) > 0.5) {
            this.y += dy * 0.05;
          }
        }
      }
    }

    function init() {
      particleArray = [];
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 60px sans-serif';
      ctx.textAlign = 'left';
      
      // Draw main text with highlighted parts
      const mainTextParts = textContent[currentText].main.split(/<[^>]+>/);
      let xPos = 0;
      
      mainTextParts.forEach((part, i) => {
        if (part) {
          ctx.fillStyle = i % 2 === 0 ? '#000' : '#8B0000';
          ctx.fillText(part, xPos, canvas.height/2 - 50);
          xPos += ctx.measureText(part).width;
        }
      });

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let y = 0, y2 = textCoordinates.height; y < y2; y += 4) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += 4) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            let posX = x;
            let posY = y;
            let color = `rgb(${textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4)]},
                         ${textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 1]},
                         ${textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 2]})`;
            particleArray.push(new Particle(posX, posY, color));
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update auto target
      if (isAnimating) {
        autoTarget.update();
      }
      
      // Update and draw particles
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    }

    init();
    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentText, isAnimating]);

  return (
    <section id="home" className="hero-section">
      {/* Text Content on Left */}
      <div className="hero-content">
        <div className="text-container">
          <p className="subtext animate-fade">{textContent[currentText].sub}</p>
          <button className="cta-button">Explore Products</button>
        </div>
      </div>

      {/* GIF on Right */}
      <div className="video-background">
        <img src={heroVideo} alt="Hummer Product" />
      </div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="text-effect"></canvas>
    </section>
  );
};

export default Hero;