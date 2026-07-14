import React from "react";
import Collapsible from "../components/collap";
import './projects.css';

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";

import g126 from "../assets/g126.png";
import g226 from "../assets/g226.png";
import g326 from "../assets/g326.png";
import g426 from "../assets/g426.png";
import g526 from "../assets/g526.png";
import g626 from "../assets/g626.png";
import g726 from "../assets/g726.png";
import g826 from "../assets/g826.png";
import g926 from "../assets/g926.png";
import g1026 from "../assets/g1026.png";
import g1126 from "../assets/g1126.png";

function Project() {
  return (
    <div>
      <h1>My Projects</h1>

      <div className="page">

      <Collapsible title="LA Olympics 2028 Data Analysis - (September 2025 - July 2026)">
        <h3>Data analysis to create recommendations for the planning of the 2028 LA Olympics. FBLA National Qualifying analysis.</h3>
        <h2>Graphs were created using python on google colab.</h2>
        <div className="image-gallery">
            <img src={g126} alt="g126" />
            <img src={g1126} alt="g1126" />
            <img src={g1026} alt="g1026" />
            <img src={g426} alt="g426" />
            <img src={g526} alt="g526" />
            <img src={g626} alt="g626" />
            <img src={g726} alt="g726" />
            <img src={g826} alt="g826" />
            <img src={g926} alt="g926" />
            <img src={g326} alt="g326" />
            <img src={g226} alt="g226" />
          </div>
      </Collapsible>

      <Collapsible title="Athena Award Hack Club Projects - (August 2025 - November 2025)">
        <h3>I created these projects for the Athena Award, hosted by Hack Club, a program ran in collaboration with MIT, the U.S.
        Congressional App Challenge, Girls Who Code, and GitHub.I recieved the award for 32 hours of dedicated work on 3 projects. 
        These were some of my very first websites! Click the title to check out the repo or website.</h3>
        <div className="earlyweb">
         <a href="https://github.com/Saanvi4800/athenaworkshop" target="_blank" rel="noopener noreferrer">Bakeify Repo,</a>
         <a href="https://saanvi4800.github.io/athenaworkshop/index.html" target="_blank" rel="noopener noreferrer"> Demo</a>
         <h3>This was the very first website I made. I used vanilla html and css, and kept it pretty simple. The plan was to add a dessert each week, and the website wold grow. I did not touch the website once after the inital deployment. Unrelated but I also realized I suck at baking.</h3>
         <a href="https://github.com/Saanvi4800/Focus-Dashboard" target="_blank" rel="noopener noreferrer">Focus Dashboard Repo,</a>
         <a href="https://saanvi4800.github.io/Focus-Dashboard/" target="_blank" rel="noopener noreferrer"> Demo</a>
         <h3>This was my favorite of the three. It was the first project where I used javascript as well. Even though the design and organization isn't perfect it is MUCH better than my first one. This project has also actually been used as well which was amazing to hear!</h3>
         <a href="https://github.com/Saanvi4800/Expense-Tracker" target="_blank" rel="noopener noreferrer">Expense Tracker Repo,</a>
         <a href="https://saanvi4800.github.io/Expense-Tracker/" target="_blank" rel="noopener noreferrer"> Demo</a>
         <h3>This project tracks balance, income, and expense, as well as transactions. It is essentially a heavily simplified version of an monetary tracker a bank would use </h3>
       </div>
       <h3>As a result of getting the Athena Award, I had the oppurtunity to attend Parthenon in nyc: the largest all-girls high school hackathon in the world! I met my teammates (Shout out Annie and Aanya!) and we created <a href="https://github.com/Saanvi4800/citygirldaily" target="_blank" rel="noopener noreferrer"> City Girl Daily</a> This was 
        my first ReactJS project which was challenging but I am glad we decided to use that framework. If I hadn't learned it, the website you are on right now would not be here! </h3> 
      </Collapsible>

      <Collapsible title="New York City Air Quality Data Analysis - (December 2024 - July 2025)">
        <h3>Data analysis to analyze major pollutants and create recommendations for improving air quality in New York City. FBLA National Finalist Project.</h3>
        <h2>Graphs were created using python on google colab.</h2>
        <div className="image-gallery">
            <img src={g1} alt="g1" />
            <img src={g2} alt="g2" />
            <img src={g3} alt="g3" />
            <img src={g4} alt="g4" />
            <img src={g5} alt="g5" />
            <img src={g6} alt="g6" />
            <img src={g7} alt="g7" />
          </div>
      </Collapsible>
    </div>
    </div>
  );
}

export default Project;