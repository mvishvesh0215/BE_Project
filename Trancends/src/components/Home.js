// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Home.css'; // Import CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Trancends</h1>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-item">
          <h3>Personalized Recommendations</h3>
          <p>Get personalized recommendations based on your current skill level, interests, and career goals.</p>
        </div>
        <div className="feature-item">
          <h3>Comprehensive Skill Assessment</h3>
          <p>Take skill assessment tests to evaluate your proficiency in various programming languages and technologies.</p>
        </div>
        <div className="feature-item">
          <h3>Learning Paths</h3>
          <p>Discover curated learning paths tailored to your skill level and learning objectives.</p>
        </div>
        <div className="feature-item">
          <h3>Community Collaboration</h3>
          <p>Connect with other learners, mentors, and industry professionals to collaborate on projects and share insights.</p>
        </div>
      </section>
      <Link to="/register" className="register-button">Register Now</Link> {/* Link to the Register page */}
    </div>
  );
};

export default Home;
