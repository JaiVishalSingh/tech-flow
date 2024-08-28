import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Ensure you create this CSS file
import landingPage from "../../assets/landingpage.png"

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      
      <div className="hero-section">
        <div className="hero-text">
          <h1>
          Tech flow , Where <span className="highlight">Technical </span> Problems Meet Their Match.
          </h1>
          <p>
            Join our platform to ask questions, learn, and share technical knowledge with millions of developers worldwide.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={() => navigate("/Auth")}>
              Sign up
            </button>
            <button className="cta-btn secondary" onClick={() => navigate("/Community")}>
              Visit the community
            </button>
          </div>
        </div>
        <div className="hero-image">
        <img src={landingPage} alt="TechOverflow Illustration" />
           
        </div>
      </div>

      <div className="tech-solutions">
        <div className="solutions-text">
          <h2>Comprehensive Solutions for All Your Tech and System Challenges</h2>
          <p>Whether you’re struggling with mobile device glitches, laptop issues, operating system errors, or reboot troubles, our platform provides expert guidance and practical solutions. From troubleshooting everyday problems to tackling complex technical challenges, TechOverflow is your go-to resource for resolving all your device-related issues with ease.</p>
          <button className="cta-btn primary" onClick={() => navigate("/techSolutions")}>
            Full tech solutions
          </button>
        </div>
        <div className="solutions-image">
          <img
            src="https://via.placeholder.com/500x300" 
            alt="TechOverflow for Teams"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
