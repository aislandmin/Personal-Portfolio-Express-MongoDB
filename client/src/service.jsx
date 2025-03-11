/*
  File Name: service.jsx
  Student Name: Xiaomin Guo
  Student ID: 301495284
  Date: February 2, 2025  
*/

import "./index.css";
import serviceImage from "./assets/fullstack.webp";

export default function Service() {
  return (
    <div className="home-container">
      {/* title section */}
      <p className="home-introContent">
        I Would Love to Work on Your Next Project
      </p>
      {/* introducton of skills */}
      <div className="about-introduction">
        <div className="service-head-portrait">
          <img src={serviceImage} alt="full stack image" />
        </div>
        <p className="about-introPara">
          I have 10+ years of professional experience as a Software Engineer,
          holding expansive expertise in software development, business
          analysis, quality assurance and testing, while applying Agile
          practices.
        </p>
      </div>
      {/* skills section */}
      <section className="service-container">
        <ul className="categories">
          <li className="category">
            Object-Oriented Programming
            <br />
            Java, C#, C++, SpringBoot, .Net
          </li>
          <li className="category">Mobile Development</li>
          <li className="category">Agile Methodologies</li>
          <li className="category">
            Web Development
            <br />
            JavaScript, HTML, CSS, React, Angular
          </li>
          <li className="category">
            Databases
            <br />
            MySQL, PL/SQL, MongoDB
          </li>
          <li className="category">
            Cloud Computing
            <br />
            AMS, Azure, Snowflakes, IBM Cloud
          </li>
        </ul>
      </section>
    </div>
  );
}
