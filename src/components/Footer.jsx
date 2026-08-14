import React from 'react';

const Footer = () => {
  const links = [
    'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Instagram Lite', 'Threads', 'Contact Uploading & Non-Users', 'Meta Verified'
  ];

  return (
    <footer>
      <div className="footer-links">
        {links.map((link, index) => (
          <a key={index} href="#">{link}</a>
        ))}
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Instagram from Meta
      </div>
    </footer>
  );
};

export default Footer;
