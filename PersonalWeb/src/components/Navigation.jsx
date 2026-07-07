import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import frog from "../assets/frog2.jpeg";
import face from "../assets/facec.png";
import Icon from '@hackclub/icons';

function Navigation() {
  const [currentImage, setCurrentImage] = useState(frog);

  const toggleImage = () => {
    setCurrentImage(prev => (prev === frog ? face : frog));
  };

  return (
    <div className="parent-nav">
      <nav className="navbar">
        <ul>
          <figure>
            <div className="circle-container">
              <img
                id="frog"
                src={currentImage}
                onClick={toggleImage}
                alt="user"
                className="circle-img"
              />
            </div>
            <figcaption>*click me!*</figcaption>
          </figure>

          <div className="contact" style={{ color: "beige" }}>
            <a href="https://github.com/Saanvi4800" target="_blank" rel="noopener noreferrer">
              <Icon glyph="github" size={25} />
            </a>
            <a href="https://www.instagram.com/saanvitrip24/" target="_blank" rel="noopener noreferrer">
              <Icon glyph="instagram" size={25} />
            </a>
            <a href="mailto:Saanvi4800@gmail.com">
              <Icon glyph="email" size={25} />
            </a>
            <a href="https://www.linkedin.com/in/saanvi-tripathi-88b977381/" target="_blank" rel="noopener noreferrer">
              <Icon glyph="linkedin" size={25} />
            </a>
            <a href="https://hackclub.enterprise.slack.com/team/U09984Y84BD" target="_blank" rel="noopener noreferrer">
              <Icon glyph="slack" size={25} />
            </a>
          </div>

          <li><Link to="/">home</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/diy">diys</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;