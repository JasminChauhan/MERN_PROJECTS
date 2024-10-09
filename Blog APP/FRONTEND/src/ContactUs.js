import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import { Link } from 'react-router-dom'; 

function ContactUs() {
  return (
    <div className="contact-container">
      <section className="contact-section py-5">
        <div className="container text-center">
          <h1 className="contact-title animate-fade-in">Contact Us</h1>
          <p className="contact-description">We'd love to hear from you! Here’s how you can reach us.</p>

          <div className="contact-info mt-4">
            <div className="info-item animate-fade-in">
              <h5>Name</h5>
              <p>Jasmin Chauhan</p>
            </div>
            <div className="info-item animate-fade-in">
              <h5>Email</h5>
              <p>chauhanjasmin00@gmail.com</p>
            </div>
            <div className="info-item animate-fade-in">
              <h5>Phone</h5>
              <p>9313474523</p>
            </div>
          </div>

          <Link to="/" className="back-btn">Go Back</Link>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
