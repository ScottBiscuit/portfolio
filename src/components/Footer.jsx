
import React from 'react';
import '../styles/footer.css'; // Link to your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Created by Scott Johnstone  (Copyright &copy; {new Date().getFullYear()} SJ)</p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
