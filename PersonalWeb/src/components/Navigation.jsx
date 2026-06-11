import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import frog from "/src/assets/frog2.jpeg";


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