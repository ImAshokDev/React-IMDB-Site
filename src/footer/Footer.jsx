import React from "react";
import "./Footer.scss";

const Footer = () => (
  <div className="footer-section">
    <div className="icon">
      {/* map */}
      <i className="fab fa-twitter-square" />
      <i className="fab fa-facebook" />
      <i className="fab fa-instagram" />
    </div>
    <div className="text">
      <p>Copyright @ 1990-2015 IMDb.com. Inc</p>
    </div>
  </div>
);

export default Footer;
