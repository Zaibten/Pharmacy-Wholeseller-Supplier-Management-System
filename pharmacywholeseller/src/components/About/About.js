import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Who We Are Section */}
      <div className="container section">
        <h3 className="text-center animate-header hotpink-text">
          <span className="highlight-border">Who We Are ?</span>
        </h3>
        <div className="row align-items-center mt-4">
          <div className="col-12 col-sm-6 animate-fade">
            <p className="about-text">
              Welcome to <strong className="hotpink-text">Pharma Sync</strong>, 
              your trusted destination for ordering medicines, healthcare 
              essentials, and wellness products! Our mission is to connect 
              wholesalers, pharmacies, and retailers in one seamless platform, 
              making access to healthcare products quick and convenient.  
              Thank you for choosing{" "}
              <strong className="hotpink-text">Pharma Sync!</strong>
            </p>
          </div>
          <div className="col-12 col-sm-6 animate-zoom">
            <img
              src="https://img.pikbest.com/wp/202413/medical-health-care-three-dimensional-gene-chain-products-web-banner_9105592.jpg!w700wp"
              alt="Pharmacy"
              className="w-100 rounded-shadow"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container section animate-fade-up">
        <div className="stats-container">
          <div className="stat-card animate-scale">
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card animate-scale">
            <h2>1K+</h2>
            <p>Retailers & Wholesalers</p>
          </div>
          <div className="stat-card animate-scale">
            <h2>500+</h2>
            <p>Partnered Pharmacies</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-section section">
        <h3 className="text-center hotpink-text animate-header">
          What Our Clients Say
        </h3>
        <div className="testimonial-container">
          <div className="testimonial-card animate-fade">
            <p>
              "Pharma Sync makes it so easy to order medicines online. The
              delivery is always on time and hassle-free!"
            </p>
            <h5>- Sarah J.</h5>
          </div>
          <div className="testimonial-card animate-fade-up">
            <p>
              "As a retailer, I love how I can connect directly with wholesalers
              and get the best deals on pharma products."
            </p>
            <h5>- Ahmed R.</h5>
          </div>
          <div className="testimonial-card animate-fade">
            <p>
              "Pharma Sync has truly simplified how I shop for healthcare
              products. It’s convenient and reliable."
            </p>
            <h5>- Olivia P.</h5>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container section animate-fade-up">
        <h3 className="text-center hotpink-text">Our Mission</h3>
        <p className="text-center mission-text">
          At Pharma Sync, our mission is to ensure easy access to safe,
          affordable, and authentic healthcare products. We aim to bridge
          the gap between wholesalers, pharmacies, and customers by building
          a platform that is reliable, transparent, and efficient. Whether
          it’s daily essentials, prescription medicines, or wellness
          products – Pharma Sync is here to serve you.
        </p>
      </div>
    </div>
  );
};

export default About;
