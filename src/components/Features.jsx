import React from "react";
import {
  FiTool,
  FiSettings,
  FiZap,
  FiClock,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import BikeImage from "../assets/bikeframe.png"; // keep your path
import "./Features.css";

const TwoWheelerServices = () => {
  const services = [
    {
      title: "Expert Repairs",
      icon: <FiTool />,
      description:
        "Skilled technicians for all brands and models with military-grade precision",
    },
    {
      title: "Routine Maintenance",
      icon: <FiSettings />,
      description:
        "Keep your ride in peak condition with our scheduled maintenance programs",
    },
    {
      title: "Performance Upgrades",
      icon: <FiZap />,
      description:
        "Enhance your bike's capabilities with our performance packages",
    },
  ];

  const stats = [
    { value: "26+", label: "Years Experience", icon: <FiAward /> },
    { value: "98%", label: "Satisfaction Rate", icon: <FiCheckCircle /> },
    { value: "45min", label: "Quick Service", icon: <FiClock /> },
  ];

  return (
    <section className="two-wheeler-services" id="two-wheeler-services">
      <div className="container">
        {/* MAIN LAYOUT: left visual + right checklist */}
        <div className="service-display">
          {/* LEFT VISUAL (SVG frame + framed text + bike) */}
          <div className="left-visual">
            {/* Inline SVG neon L-shaped frame (scales responsively) */}
           
            {/* bike image placed under/through the frame */}
            <img
              src={BikeImage}
              alt="Two-wheeler"
              className="bike-image-in-frame"
            />

            {/* subtle glow under bike */}
            <div className="bike-glow" aria-hidden="true"></div>
          </div>

          {/* RIGHT: checklist points (like the image) */}
          <div className="points-right">
            {services.map((s, i) => (
              <div className="point-row" key={i}>
                <div className="point-square">
                  {/* a small square with check icon — we use the same theme gradient */}
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="#fff"
                      d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.4z"
                    />
                  </svg>
                </div>
                <div className="point-text">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

    
        {/* CTA */}
        <div className="service-cta-wrapper">
          <button className="service-cta">
            Book Your Service Now <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TwoWheelerServices;
