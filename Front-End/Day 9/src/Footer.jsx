import React from 'react';
import './Assets/CSS/Footer.css';
import { Link } from 'react-router-dom';
import fbt from './Assets/images/fbt.png'
import int from './Assets/images/int.png'
import bt from './Assets/images/bt.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <ul>
            <li><Link to="/Tc">Terms and Conditions</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/pri">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: spam-guard@gmail.com</p>
          <p>Phone: +8870647756</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          {/* Add social media links and images here */}
          <ul className="social-media-links">
            <li>
              <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                <img src={fbt} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
                <img src={int} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
                <img src={bt} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Spam Guard. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
