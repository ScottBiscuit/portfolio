import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import social media icons
import "../styles/navbar.css"; // Link to the external CSS
import LogoInitials from "../assets/images/logo-color.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("about"); // State to manage active link

  const handleClick = (link) => {
    setActiveLink(link);
  };
  const handleEmailClick = () => {
    alert("Email: scottjcoding@gmail.com"); // Show email address on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LogoInitials} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className={activeLink === "about" ? "active" : ""}>
          <Link to="/" onClick={() => handleClick("about")}>
            About
          </Link>
        </li>
        <li className={activeLink === "projects" ? "active" : ""}>
          <Link to="/projects" onClick={() => handleClick("projects")}>
            Projects
          </Link>
        </li>
        <li className={activeLink === "experiences" ? "active" : ""}>
          <Link to="/experience" onClick={() => handleClick("experience")}>
            Experience
          </Link>
        </li>
        <li className={activeLink === "resume" ? "active" : ""}>
          <Link to="/resume" onClick={() => handleClick("resume")}>
            Resume
          </Link>
        </li>
      </ul>
      <div className="navbar-social">
        <a href="mailto:scottjcoding@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/ScottBiscuit"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/scottallanjohnstone"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
