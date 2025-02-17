// AboutUs.js

import React from 'react';
import '../styles/About.css';
import image1 from '../assets/photo1.jpg';
import image2 from '../assets/photo2.jpg';
import image3 from '../assets/photo3.jpg';
import image4 from '../assets/photo4.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="image-row">
        <div className="image-container">
          <img src={image1} alt="Image 1" />
          <div className="image-content">
            <p>Content related to Image 1</p>
          </div>
        </div>
        <div className="image-container">
          <img src={image2} alt="Image 2" />
          <div className="image-content">
            <p>Content related to Image 2</p>
          </div>
        </div>
        <div className="image-container">
          <img src={image3} alt="Image 3" />
          <div className="image-content">
            <p>Content related to Image 3</p>
          </div>
        </div>
        <div className="image-container">
          <img src={image4} alt="Image 4" />
          <div className="image-content">
            <p>Content related to Image 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
