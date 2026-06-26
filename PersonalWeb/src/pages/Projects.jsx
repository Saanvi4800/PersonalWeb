import React from "react";
import Collapsible from "../components/collap";
import './projects.css';

function Project() {
  return (
    <div>
      <h1>My Projects</h1>

      <div className="page">
      <Collapsible title="LA Olympics 2028 Data Analysis - (September 2025 - July 2026)">
        <h3>Data analysis to create recommendations for the planning of the 2028 LA Olympics. FBLA National Qualifying analysis.</h3>
      </Collapsible>
      <Collapsible title="New York City Air Quality Data Analysis - (December 2024 - July 2025)">
        <h3>Data analysis to analyze major pollutants and create recommendations for improving air quality in New York City. FBLA National Finalist Project.</h3>
        <h2>Graphs were created using python on google colab.</h2>
        <div class="image-gallery">
        <img src="src/assets/g1.png" alt="g1" ></img>
        <img src="src/assets/g2.png" alt="g2" ></img>
        <img src="src/assets/g3.png" alt="g3" ></img>
        <img src="src/assets/g4.png" alt="g4" ></img>
        <img src="src/assets/g5.png" alt="g5" ></img>
        <img src="src/assets/g6.png" alt="g6" ></img>
        <img src="src/assets/g7.png" alt="g7"></img>
        </div>
      </Collapsible>
    </div>
    </div>
  );
}

export default Project;