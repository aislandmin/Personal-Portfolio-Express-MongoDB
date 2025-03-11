/*
  File Name: Home.jsx
  Student Name: Xiaomin Guo
  Student ID: 301495284
  Date: February 2, 2025  
*/
import { Link } from "react-router-dom";
import "../src/index.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <p className="home-introContent">
          Hello, I am <span className="home-introName">Xiaomin Guo</span>
        </p>
        <p className="home-introPara">Welcome to my personal portfolio!</p>

        <p className="home-introContent">My Mission</p>
        <p className="home-introPara">
          Develop innovative and efficient software solutions that empower users
          and enhance everyday experiences
        </p>

        <div className="home-link-buttons">
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/project">
            <button>Project</button>
          </Link>
          <Link to="/service">
            <button>Service</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
}
