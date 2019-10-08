import React from 'react';
import './Footer.scss';

const Footer = ({ icon }) => (
  <div className="footer-section">
    <div className="icon">
      {icon.map((v) => (
        <i className={`fab fa-${v.name}`} />
      ))}
    </div>
    <div className="text">
      <p>Copyright @ 1990-2015 IMDb.com. Inc</p>
    </div>
  </div>
);

export default Footer;
