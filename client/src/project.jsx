/*
  File Name: project.jsx
  Student Name: Xiaomin Guo
  Student ID: 301495284
  Date: February 2, 2025  
*/

import "../src/index.css";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";

export default function Project() {
  return (
    <div className="home-container">
      {/* title section */}
      <p className="home-introContent">My Projects</p>

      <div className="about-introduction">
        {/* project 1 */}
        <div className="project-head-portrait">
          <img src={project1} alt="Project 1" />
        </div>
        <p className="about-introPara">
          Project 1 - Automated Molecular Diagnostics
          <br />
          This application implements automated molecular diagnostics including
          calibration, parameter setting, experiment setting, motor control for
          Liquid Handling System (LHS), Nucleic Acid Extraction (NAEx)
          processes.
        </p>
      </div>
      {/* project 2 */}
      <div className="about-introduction">
        <div className="project-head-portrait">
          <img src={project2} alt="Project 2" />
        </div>
        <p className="about-introPara">
          Project 2 - GPRS PDP management and configuration
          <br /> This software module implements the function of PDP context
          activation, optimize the module of PDP management, design and
          implement the functions of PDP parameter configuration、PDP context
          activation history、bit rate configuration to be used in engineering
          mode.
        </p>
      </div>
      {/* project 3 */}
      <div className="about-introduction">
        <div className="project-head-portrait">
          <img src={project3} alt="Project 3" />
        </div>
        <p className="about-introPara">
          Project 3 - Business Operation Support System (BOSS)
          <br />
          This system performs such functions as Mediation, rating, integrated
          account, integrated settlement, product management, order management,
          service operation, service handling, contract management, and
          marketing. It supports diversified 3G services for Hongkong、Brunei
          and Iraq and so on.
        </p>
      </div>
    </div>
  );
}
