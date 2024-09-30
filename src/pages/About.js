import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        As tech rapidly evolves, so too must the way we connect and collaborate. Preselect brings together the next wave of developers, engineers, and innovators for exclusive parties, events, travel, and networking designed to foster growth and collaboration.
      </p>
      <p>
        Inspired by <a href="https://www.sequoiacap.com/article/the-next-billion-developers-perspective/" target="_blank" rel="noopener noreferrer">
          the thesis that bringing 1 billion developers into the software economy could rival AGI in terms of its economic impact
        </a>, we’re curating a space where natural selection takes its course and the future of tech can meet, share ideas, and build the innovations that will shape tomorrow.
      </p>
      <p>
        If you work in tech, sign up to be considered for membership and gain access to exclusive dinner parties and networking events.
      </p>
    </div>
  );
};

export default About;