import React, { useState } from "react";
import "../styles/projects.css"; // Import the CSS file for styling
import Modal from "../components/Modal"; // Import the Modal component
import TravelReviewsLogin from "../assets/projects/travel-review-login.png";
import TravelReviews from "../assets/projects/travel-reviews.png";
import RPGCampaignTracker from "../assets/projects/rpg-campaign-tracker-ss.png";

const projects = [
  {
    name: "Travel Reviews",
    imagePreview: TravelReviewsLogin,
    imageModal: TravelReviews,
    technologies: ["Javascript, React, PostgreSQL, Node.js, Bootstrap, AWS-S3"],
    description:
      "Developed a travel review site with responsive location searching using RESTful API to create location specific reviews and an interactive review rating system. As part of a collaborative team, I played a key role in developing the front-end using React and Bootstrap, ensuring a responsive and user-friendly design. On the server side, I integrated components to create efficient endpoints for seamless communication with a PostgreSQL database and AWS-S3 file storage.",
  },
  {
    name: "RPG Campaign Tracker",
    imagePreview: RPGCampaignTracker,
    imageModal: RPGCampaignTracker,
    technologies: ["Javascript, React, PostgreSQL, Node.js, Bootstrap"],
    description:
      "An all-in-one resource location for game masters and players of Role Playing Games. I fully designed and implemented the site to keep game session notes and allow easy access to player character info. This is an ongoing project, with many more features planned to be added over time.",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <p className="project-title">Projects</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleCardClick(project)}
          >
            <img
              src={project.imagePreview}
              alt={project.name}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
