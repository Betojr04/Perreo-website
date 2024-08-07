import React from "react";
import "./Foot.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
<<<<<<< HEAD
        <div>Contact: info@yourcompany.com</div>
        <div className="footer-links">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter</div>
=======
        <div className="footer-contact">
          <div>
            Contact:{" "}
            <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
          </div>
        </div>
        <div className="footer-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
>>>>>>> temp-branch
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};
