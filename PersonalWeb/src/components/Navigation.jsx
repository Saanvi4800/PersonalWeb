import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import frog from "/src/assets/frog2.jpeg";
import Icon from '@hackclub/icons'



function Navigation() {
  return (
  <div className="parent-nav">
    <nav className="navbar">
      <ul>
        <figure>
         <div className="circle-container">
           <img id= "frog" src={frog} onClick={toggleImage} alt="user" className="circle-img" />
         </div>
         <figcaption>*click me!*</figcaption>
        </figure>
         <div className="contact" style={{color: "beige"}}>
                <a href="https://github.com/Saanvi4800" target="_blank" rel="noopener noreferrer">
                  <Icon glyph="github" size={25} />
                </a>
        
                <a href="https://www.instagram.com/saanvitrip24/" target="_blank" rel="noopener noreferrer">
                  <Icon glyph="instagram" size={25} />
                </a>
        
                <a href="mailto:Saanvi4800@gmail.com">
                  <Icon glyph="email" size={25} />
                </a>
        
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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

function toggleImage() {
  const image = document.getElementById("frog");
  if (image.src.includes("frog2.jpeg")) {
    image.src = "/src/assets/facec.png";
  } else {
    image.src = "/src/assets/frog2.jpeg";
  }
}