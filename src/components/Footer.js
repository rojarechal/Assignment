import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer links section with 6 columns */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Solutions</li>
            <li>New</li>
            <li>Enterprise</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Startups</li>
            <li>Press</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Help Centre</li>
            <li>Tutorials</li>
            <li>GitHub</li>
            <li>Cookies</li>
            <li>Marketplaces</li>
            <li>Licenses</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Use Cases</h3>
          <ul>
            <li>SaaS Centre</li>
            <li>Ecommerce</li>
            <li>Government</li>
            <li>Enterprises</li>
            <li>Startups</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>AngelList</li>
            <li>Dribbble</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Licenses</li>
            <li>Cookies</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom text with left and right aligned */}
      <div className="footer-bottom">
        <span className="footer-left">zysk</span>
        <span className="footer-right">technologies. All rights reserved. © 2077</span>
      </div>
    </footer>
  );
};

export default Footer;
