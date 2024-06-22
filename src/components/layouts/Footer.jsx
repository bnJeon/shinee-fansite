import React from 'react';
import '../layouts/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/path/to/your/logo.png" alt="Company Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/about">예시</a></li>
              <li><a href="/services">예시</a></li>
              <li><a href="/contact">예시</a></li>
              <li><a href="/privacy">예시</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 예시</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
