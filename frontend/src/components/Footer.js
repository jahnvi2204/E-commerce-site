import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section support">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/order-tracking">Order Tracking</a></li>
            <li><a href="/help">Help Center</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to stay updated on the latest deals and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OceanCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
