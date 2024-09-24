import React from 'react';
import{ VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/experience.css'; // Import the CSS file
import VikingInspections from '../assets/images/vikingInspections.png';
import Devmountain from '../assets/images/devmountain.png'
import KBB from '../assets/images/KBB.png';
import CA from '../assets/images/cummins-allison.png'
import ExperienceTitle from '../assets/titles/experience.png';

const experience = [
  {
    company: 'Devmountain',
    role: 'Software Developer Trainee',
    dates: 'Jun 2024 - Aug 2024',
    logo: Devmountain, // Path to the logo image
    responsibilities: [
      'Developed a travel review site with responsive location searching using RESTful API to create location specific reviews and an RPG Campaign Tracking site using React and Node to keep game notes and easily access character info.',
      'Administered file hosting using AWS-S3 to allow users to save photos in reviews and added interactive rating system.',
      'Utilized Javascript and React to create dynamic reusable components that are responsive across all viewing platforms.',
      'Collaborated in a development team by managing task distribution, successfully working through Git merge conflicts'
    ]
  },
  {
    company: 'Viking Inspections',
    role: 'Home Inspector Trainer',
    dates: 'Apr 2021 - May 2024',
    logo: VikingInspections, // Path to the logo image
    responsibilities: [
      'Established learning curriculum utilizing prior training experience to improve team inspection quality and efficiency.',
      'Increased team productivity by identifying inspection software issues and refined and streamlined comment template.',
      'Identified and presented construction deficiencies to clients using Spectora software to assist in real estate transactions.'
    ]
  },
  {
    company: 'Kitty Bunny Bakery',
    role: 'Business Data Analyst',
    dates: 'Mar 2017 - Dec 2020',
    logo: KBB, // Path to the logo image
    responsibilities: [
      'Identified and interpreted sales trends and patterns in similar business which increase sales by 200% in second year.',
      'Utilized QuickBooks, Microsoft Office Suites and Square accounting software to monitor and project company finances.',
      'Gathered data and analyzed results to create reports that provided insightful information for stakeholders to drive the business roadmap.'
    ]
  },
  {
    company: 'Cummins Allison',
    role: 'Business Data Analyst',
    dates: 'Mar 2017 - Dec 2020',
    logo: CA, // Path to the logo image
    responsibilities: [
      'Entrusted to handle installation of all new test software and equipment due to extensive knowledge in all services.',
      'Implemented a robust new hire training program that improved employee knowledge base, decreased errors, and increased customer satisfaction.',
      'Accurately diagnosed and repaired errors or technical problems in production environment equipment and software with an aim to minimize downtime.'
    ]
  },

];

const Experience = () => {
  return (
    <div className="experience-container">
     {/* <img src={ExperienceTitle} alt="title" /> */}
     {/* <p className='project-title'>Experiences</p> */}
      <VerticalTimeline >
        {experience.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#' }}
            contentArrowStyle={{ borderRight: '7px solid #007bff' }}
            iconStyle={{ background: '#FFF', color: '#fff' }}
            icon={<img src={exp.logo} alt={`${exp.company} Logo`} className="company-logo" />}
          >
            <h3 className="vertical-timeline-element-title">{exp.company}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.role}</h4>
            <p className="employment-dates">{exp.dates}</p>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;