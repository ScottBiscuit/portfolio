import React, { useState } from 'react';
import '../styles/education.css'; // Ensure you link to the correct CSS file
import EducationTitle from '../assets/titles/education.png';


const educationData = [
  {
    institution: 'Devmountain',
    location: 'Lehi, UT',
    degree: 'Full Stack Web Development Certificate',
    date: 'August 2024',
  },
  {
    institution: 'University of Texas at Arlington',
    location: 'Arlington, TX',
    degree: 'Bachelor of Arts in Criminology and Criminal Justice',
    date: 'Aug 2016',
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="timeline-container">
      <img src={EducationTitle} alt="EducationTitle" />
      <div className="timeline-content">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <button className="timeline-button" onClick={() => handleClick(index)}>
              {item.institution}
            </button>
            {activeIndex === index && (
              <div className="timeline-details">
                <p>{item.location}</p>
                <p>{item.degree}</p>
                {item.gpa && <p>{item.gpa}</p>}
                <p>{item.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;