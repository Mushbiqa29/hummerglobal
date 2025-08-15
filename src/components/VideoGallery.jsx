import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Video.css';

const VideoGallery = () => {
  // Video data array
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
      thumbnail: "https://hummerglobalautomobiles.com/img/hero1.jpeg"
    },
    {
      id: 3,
      title: "Performance Tuning",
      videoUrl: "/assets/video3.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/hero1.jpeg"
    },
    {
      id: 4,
      title: "Interior Customization",
      videoUrl: "/assets/video4.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service1.jpg"
    },
    {
      id: 5,
      title: "Exterior Modifications",
      videoUrl: "/assets/video5.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service2.jpg"
    },
    {
      id: 6,
      title: "Engine Upgrades",
      videoUrl: "/assets/video6.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service4.jpg"
    },
    {
      id: 7,
      title: "Lighting Systems",
      videoUrl: "/assets/video7.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/hero2.jpeg"
    },
    {
      id: 8,
      title: "Suspension Setup",
      videoUrl: "/assets/video8.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/img2.jpeg"
    },
    {
      id: 9,
      title: "Wheel Customization",
      videoUrl: "/assets/video9.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/img3.jpeg"
    },
    {
      id: 10,
      title: "Audio System Install",
      videoUrl: "/assets/video10.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service5.jpg"
    },
    {
      id: 11,
      title: "Paint Protection",
      videoUrl: "/assets/video11.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service2.jpg"
    },
    {
      id: 12,
      title: "Full Build Process",
      videoUrl: "/assets/video12.mp4",
      thumbnail: "https://hummerglobalautomobiles.com/img/service1.jpg"
    }

  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const carouselRef = useRef(null);
  const autoRotateInterval = useRef(null);
  const videoRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Cylinder carousel parameters
  const radius = 300; // Radius of the cylinder
  const cardWidth = 250;
  const cardHeight = 350;
  const totalVideos = videos.length;

  // Auto-rotation effect
  useEffect(() => {
    if (isPlaying) {
      autoRotateInterval.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % totalVideos);
      }, 3000);
    }
    return () => clearInterval(autoRotateInterval.current);
  }, [isPlaying, totalVideos]);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  const nextSlide = () => {
    setIsPlaying(false);
    setActiveIndex(prev => (prev + 1) % totalVideos);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const prevSlide = () => {
    setIsPlaying(false);
    setActiveIndex(prev => (prev - 1 + totalVideos) % totalVideos);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const handleVideoClick = (video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Calculate position for each card in the cylinder
  const getCardStyle = (index) => {
    const angle = ((index - activeIndex) * 360) / totalVideos;
    const radian = (angle * Math.PI) / 180;
    
    return {
      transform: `
        translateX(${Math.sin(radian) * radius}px)
        translateZ(${radius * Math.cos(radian)}px)
        rotateY(${-angle}deg)
      `,
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      zIndex: index === activeIndex ? 10 : 1,
      opacity: index === activeIndex ? 1 : 0.7
    };
  };

  return (
    <div className="video-gallery-page">
      {/* Hero Section with Clickable Thumbnail */}
      <section className="video-gallery-hero">
        <div className="video-background" onClick={() => handleVideoClick(videos[0])}>
          <div className="video-thumbnail">
            <img 
              src="https://hummerglobalautomobiles.com/img/service1.jpg" 
              alt="Featured Video" 
            />
            <div className="play-button"></div>
          </div>
          <div className="video-overlay"></div>
        </div>

        <div className="video-controls">
          <button className="mute-btn" onClick={toggleMute}>
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
          <div className="video-info">
            <h1 className="video-title">CUSTOMIZATION UPGRADE SERVICES</h1>
            <p className="video-description">
              Experience our premium video gallery with cutting-edge 3D carousel technology
            </p>
          </div>
        </div>
      </section>

      {/* 3D Cylindrical Carousel */}
      <section className="carousel-section">
        <div className="carousel-container">
          <h2 className="section-title">Featured <span className="highlight">Videos</span></h2>
          
          <div 
            className="cylindrical-carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className={`carousel-card ${index === activeIndex ? 'active' : ''}`}
                style={getCardStyle(index)}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVideoClick(video)}
              >
                <div className="card-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-icon"></div>
                  <span className="duration">{video.duration}</span>
                </div>
                <h3 className="card-title">{video.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="nav-button prev" onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
            </button>
            <button className="nav-button next" onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-button" onClick={handleCloseVideo}>
              &times;
            </button>
            <div className="video-container">
              <video controls autoPlay>
                <source src={activeVideo.videoUrl} type="video/mp4" />
              </video>
              <h3>{activeVideo.title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoGallery;