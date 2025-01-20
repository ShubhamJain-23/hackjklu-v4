"use client"
import React from 'react';
import './coming-soon-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const CodersAtWork: React.FC = () => {
  const handleSubmitProblem = () => {
    window.location.href = 'https://www.hackjklu.com/submit-your-problem';
  };

  return (
    <div>
      {/* Glassmorphism Card Section (Top Center) */}
      <div className="content">
        <h2 className="typewriter glitch">Coders at Work</h2>
        <p className="innovation-text">Innovation Incoming!</p>

        {/* Submit Your Problem Button */}
        <button className="submit-btn" onClick={handleSubmitProblem}>
          Submit Your Problem
        </button>

        {/* Social Media Icons */}
        <div className="social-media">
          <a
            href="https://www.instagram.com/hackjklu"
            className="social-icon instagram"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/council-of-technical-affairs-jklu/"
            className="social-icon linkedin"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.youtube.com/@CouncilofTechnicalAffairs"
            className="social-icon youtube"
            title="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      {/* Background Image Section (Bottom Center) */}
      <div className="background-container">
        <img
          src="https://steamuserimages-a.akamaihd.net/ugc/1756948115632541771/90BEF0E27DDF64766154E12F1FDD462F89849786/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
          alt="Background Image"
          className="background-image"
        />
        {/* <img
          src="https://cdn.prod.website-files.com/5e9aa66fd3886aa2b4ec01ca/5fa5462124f6db4a79de1899_webdevelopercoding.gif"
          alt="Background Image"
          className="background-image"
        /> */}
      </div>

      {/* Particle Effect */}
      <div id="particles-js"></div>
    </div>
  );
};

export default CodersAtWork;
