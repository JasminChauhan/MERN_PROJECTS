import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-section py-5">
        <div className="container text-center">
          <h1 className="about-title animate-fade-in">About Us</h1>
          <p className="about-description animate-fade-in">
            Welcome to our Blog Management System! We are dedicated to providing a seamless and user-friendly platform 
            for bloggers and content creators to manage their blogs efficiently.
          </p>
          <p className="about-description animate-fade-in">
            Our mission is to empower users to express their thoughts and ideas freely, with tools that make it easy to 
            create, edit, and manage content. Whether you're a seasoned blogger or just starting, our system is designed 
            to cater to your needs.
          </p>
          <p className="about-description animate-fade-in">
            Join us in building a vibrant blogging community where creativity thrives and knowledge is shared.
          </p>

          <Link to="/" className="back-btn">Go Back</Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
