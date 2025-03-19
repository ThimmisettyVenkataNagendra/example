import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About FITFLOW */}
        <div className="footer-section about">
          <h2>About FITFLOW</h2>
          <p>Your ultimate destination for personalized fitness & nutrition plans. Achieve your wellness goals with AI-driven insights and expert guidance.</p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h2>Our Services</h2>
          <ul>
            <li>Personalized Fitness Plans</li>
            <li>AI Nutrition Guidance</li>
            <li>Wellness Marketplace</li>
            <li>Live Coaching & Virtual Classes</li>
            <li>Health Tracking & Analytics</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us & Follow Us Side by Side */}
        <div className="contact-follow-wrapper">
          {/* Contact Section */}
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: support@fitflow.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Mumbai, India</p>
          </div>

          {/* Follow Us Section (Placed Beside Contact Us) */}
          <div className="footer-section follow">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me/telegram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 FITFLOW. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
