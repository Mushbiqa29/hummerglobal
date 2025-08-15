import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Video.css';

const HummerVideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: "Hummer Battery Installation",
      videoUrl: "/assets/video1.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/hero2.jpeg",
      duration: "2:45"
    },
    {
      id: 2,
      title: "Custom Upgrades Showcase",
      videoUrl: "/assets/video2.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/hero1.jpeg",
      duration: "1:30"
    },
    {
      id: 3,
      title: "Performance Tuning",
      videoUrl: "/assets/video3.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/hero1.jpeg",
      duration: "3:15"
    },
    {
      id: 4,
      title: "Interior Customization",
      videoUrl: "/assets/video4.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service1.jpg",
      duration: "2:20"
    },
    {
      id: 5,
      title: "Exterior Modifications",
      videoUrl: "/assets/video5.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service2.jpg",
      duration: "4:10"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const hummerBgRef = useRef(null);
  const hummerVideoRef = useRef(null);
  const hummerRotateInterval = useRef(null);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isPlaying) {
      hummerRotateInterval.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % videos.length);
      }, 3000);
    }
    return () => clearInterval(hummerRotateInterval.current);
  }, [isPlaying, videos.length]);

  const hummerNextSlide = () => {
    setIsPlaying(false);
    setActiveIndex(prev => (prev + 1) % videos.length);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const hummerPrevSlide = () => {
    setIsPlaying(false);
    setActiveIndex(prev => (prev - 1 + videos.length) % videos.length);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const handleHummerVideoClick = (video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const handleHummerCloseVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  const toggleHummerMute = () => {
    if (hummerVideoRef.current) {
      hummerVideoRef.current.muted = !hummerVideoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Calculate position for each card in the circular carousel
  const getHummerCardStyle = (index) => {
    const angle = (index * (360 / videos.length)) - (activeIndex * (360 / videos.length));
    const radian = (angle * Math.PI) / 180;
    const radius = 200;
    
    return {
      transform: `
        translateX(${Math.sin(radian) * radius}px)
        translateZ(${radius * Math.cos(radian)}px)
        rotateY(${-angle}deg)
      `,
      opacity: index === activeIndex ? 1 : 0.7,
      zIndex: index === activeIndex ? 10 : 1
    };
  };

  return (
    <div className="hummer-video-gallery-container">
      {/* Parallax Background */}
      <div 
        className="hummer-video-parallax-bg"
        ref={hummerBgRef}
        style={{
          transform: `scale(${1 + scrollY * 0.0005})`,
          backgroundImage: `url(https://hummerglobalautomobiles.com/img/service1.jpg)`
        }}
      ></div>

      {/* Hero Section with Video */}
      <section className="hummer-video-hero-section">
        <div className="hummer-hero-video-wrapper" onClick={() => handleHummerVideoClick(videos[0])}>
          <video 
            ref={hummerVideoRef}
            className="hummer-main-hero-video"
            muted={isMuted}
            autoPlay
            loop
            playsInline
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hummer-video-overlay"></div>
          <div className="hummer-play-btn"></div>
        </div>

        <div className="hummer-hero-content">
          <div className="hummer-video-control-panel">
            <button className="hummer-mute-toggle" onClick={toggleHummerMute}>
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              )}
            </button>
            <div className="hummer-video-info">
              <h1 className="hummer-video-main-title">CUSTOMIZATION UPGRADE SERVICES</h1>
              <p className="hummer-video-subtext">
                Experience our premium video gallery with innovative circular carousel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="hummer-video-about">
        <div className="hummer-video-about-container">
          <div className="hummer-video-about-content">
            <h2 className="hummer-about-heading">About Us</h2>
            <h3 className="hummer-about-subheading">Global Automobiles Hummer Authorised Distributor</h3>
            <p className="hummer-about-text">
              The composition of a battery cell is a complex interplay of various components, 
              each playing a crucial role in determining the battery's performance, safety, 
              and efficiency. Understanding these components and the different types of battery 
              chemistries can help you make informed decisions when selecting batteries for your 
              specific needs.
            </p>
            <div className="hummer-about-highlight">
              <p>
                At our video gallery, we're committed to providing accurate and unbiased information 
                to help you. Our videos are designed to be informative, engaging, and easy to understand.
              </p>
            </div>
          </div>
          <div className="hummer-video-about-image">
            <div className="hummer-image-frame">
              <img src="https://hummerglobalautomobiles.com/img/service5.jpg" alt="Hummer Customization" />
            </div>
          </div>
        </div>
      </section>

      {/* Hollow Circular Carousel */}
      <section className="hummer-video-carousel-section">
        <div className="hummer-circular-carousel-container">
          <h2 className="hummer-carousel-title">Featured <span>Videos</span></h2>
          
          <div className="hummer-circular-carousel">
            <div className="hummer-carousel-center"></div>
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className={`hummer-carousel-card ${index === activeIndex ? 'hummer-active-card' : ''}`}
                style={getHummerCardStyle(index)}
                onClick={() => handleHummerVideoClick(video)}
              >
                <div className="hummer-card-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="hummer-card-play-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" fill="white"/>
                    </svg>
                  </div>
                  <span className="hummer-video-duration">{video.duration}</span>
                </div>
                <h3 className="hummer-video-card-title">{video.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="hummer-carousel-navigation">
            <button className="hummer-carousel-prev" onClick={hummerPrevSlide}>
              <svg viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
            </button>
            <button className="hummer-carousel-next" onClick={hummerNextSlide}>
              <svg viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="hummer-video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="hummer-modal-backdrop" onClick={handleHummerCloseVideo}></div>
            <div className="hummer-modal-content">
              <button className="hummer-modal-close" onClick={handleHummerCloseVideo}>
                &times;
              </button>
              <div className="hummer-modal-video-container">
                <video controls autoPlay>
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                </video>
                <h3 className="hummer-modal-video-title">{activeVideo.title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HummerVideoGallery;