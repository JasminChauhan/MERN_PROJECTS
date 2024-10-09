import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom CSS for animations and styles
import Navbar from './Navbar'; // Import Navbar component

function Home() {
  return (
    <div>
      <Navbar /> {/* Add the Navbar to the top of the homepage */}

      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" style={{ backgroundColor: '#17a2b8' }}>
        <div className="container">
          <h1 className="hero-title animate-fade-in">Welcome to Blog Management System</h1>
          <p className="hero-subtitle">Effortlessly manage your blogs with modern tools</p>
          <a href="/blogs" className="btn btn-light btn-lg animate-slide-in mt-3">View Blogs</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 className="section-title text-primary">Our Features</h2>
          <div className="row mt-4">
            {['Create', 'Edit', 'Delete'].map((action, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card feature-card border-0 shadow-sm">
                  <div className="card-body text-center">
                    <i className={`fas fa-${action.toLowerCase()}-alt feature-icon text-primary`}></i>
                    <h5 className="card-title">{action} Blogs</h5>
                    <p className="card-text">
                      {action} your blogs quickly and easily with our intuitive interface.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 text-center" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title">Start Managing Your Blogs Today</h2>
          <a href="/blogs" className="btn btn-primary btn-lg mt-3" style={{ backgroundColor: '#007bff' }}>Get Started</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
