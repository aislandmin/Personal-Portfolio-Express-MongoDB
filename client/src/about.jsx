/*
  File Name: about.jsx
  Student Name: Xiaomin Guo
  Student ID: 301495284
  Date: February 2, 2025  
*/
import { Link } from "react-router-dom";
import "./index.css";
import mePicture from "./assets/xiaomin.jpg";
import myResume from "./assets/resume.pdf";

export default function About() {
  return (
    <div className="home-container">
      {/* title section */}
      <p className="home-introContent">
        Hello, I am <span className="home-introName">Xiaomin Guo</span>
      </p>
      <div className="about-introduction">
        {/* picture section */}
        <div className="about-head-portrait">
          <img src={mePicture} alt="image of Xiaomin Guo" />
        </div>
        {/* self introduction section */}
        <p className="about-introPara">
          I am an enthusiastic and highly motivated developer with passion and
          experience in efficiently coding websites and applications using
          modern HTML, CSS, JavaScript, React.js, Node.js. Translate UI/UX
          designs to front-end code. Eager to embrace challenges and learn more.
          Excited to bring skills to a new environment as a full stack
          developer.
        </p>
      </div>
      {/* link buttons to Contact page and Resume(pdf) */}
      <div className="home-link-buttons">
        <Link to="/contact">
          <button>Contact me</button>
        </Link>
        <a
          href={myResume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <button>My Resume</button>
        </a>
      </div>
    </div>
  );
}
