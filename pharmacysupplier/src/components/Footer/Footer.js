import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png"; // Replace with your pharmacy logo path
import galleryImage1 from "../../assets/gallery1.jpg"; // Replace with actual pharmacy images
import galleryImage2 from "../../assets/gallery2.jpg";
import galleryImage3 from "../../assets/gallery3.jpg";
import galleryImage4 from "../../assets/gallery4.png";
import galleryImage5 from "../../assets/gallery5.jpg";
import galleryImage6 from "../../assets/gallery6.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo & About */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src={logo} alt="Pharma Sync Logo" />
          </div>
          <p>
            <strong>Pharma Sync</strong> is a trusted pharmacy and wholeseller
            management platform that connects wholesalers, retailers, and
            patients with authentic medicines and healthcare products. Our goal
            is to ensure reliability, accessibility, and care for every order.
          </p>
        </div>

        {/* Gallery */}
        <div className="footer-gallery">
          <h3>Our Pharmacy Network</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={galleryImage1} alt="Pharmacy Experience 1" />
            </div>
            <div className="gallery-item">
              <img src={galleryImage2} alt="Pharmacy Experience 2" />
            </div>
            <div className="gallery-item">
              <img src={galleryImage3} alt="Pharmacy Experience 3" />
            </div>
            <div className="gallery-item">
              <img src={galleryImage4} alt="Pharmacy Experience 4" />
            </div>
            <div className="gallery-item">
              <img src={galleryImage5} alt="Pharmacy Experience 5" />
            </div>
            <div className="gallery-item">
              <img src={galleryImage6} alt="Pharmacy Experience 6" />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Stay Connected</h3>
          <p>
            Follow us on social media for the latest healthcare updates,
            exclusive offers, and pharmacy management solutions.
          </p>
          <div className="social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="footer-community">
            <p>
              <strong>Trending Hashtags:</strong> #PharmaSyncs #HealthyLiving
              #TrustedMedicines #CareDelivered
            </p>
            <p>
              Subscribe to our newsletter for healthcare insights and special
              offers!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2025 Pharma Sync. All rights reserved. Designed with ❤️ to make
          healthcare accessible for everyone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
