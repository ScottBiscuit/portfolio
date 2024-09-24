import React from "react";
import "../styles/resume.css"; // Add your custom CSS for the resume section
import resume from "../assets/images/resume.png"; // Update with actual path

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-images">
        <img src={resume} alt="Resume" className="resume-page" />
      </div>
    </div>
  );
};

export default Resume;
