/*
  File Name: Layout.jsx
  Student Name: Xiaomin Guo
  Student ID: 301495284
  Date: February 2, 2025  
*/
import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";

export default function Layout() {
  return (
    <>
      <div className="layout-header">
        <div className="layout-logo-title">
          <img src={logo} alt="logo" className="layout-logo" />
          <h1 className="layout-title">My Portfolio</h1>
        </div>

        <nav className="layout-nav-links">
          <Link to="/"> Home </Link> |<Link to="/about">About</Link> |{" "}
          <Link to="/project">Project</Link> |{" "}
          <Link to="/service">Service</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
}
