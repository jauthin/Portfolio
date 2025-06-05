import React from "react";
import './Project.css';  // Make sure this matches your CSS filename

function Projects() {
  const projectData = [
    {
      title: "Online Test System",
      descriptionFront: "MERN Stack app with admin & student roles.",
      descriptionBack: "MCQ/coding tests with Judge API integration."
    },
    {
      title: "Restaurant Booking System",
      descriptionFront: "PHP + MySQL system for table reservations.",
      descriptionBack: "Includes feedback collection module."
    },
    {
      title: "Portfolio Website",
      descriptionFront: "React-based responsive portfolio.",
      descriptionBack: "Showcases projects and contact details."
    }
  ];

  return (
    <div className="project-wrapper">
      {projectData.map((project, index) => (
        <div className="flip-box" key={index}>
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.descriptionFront}</p>
            </div>
            <div className="flip-box-back">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.descriptionBack}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
