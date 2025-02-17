// Contact.js
import React from 'react';
import '../styles/Contact.css'; // Import the CSS file for Contact component styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: KBTUG20404@kbtcoe.org</p>
          <p>Phone: +91 928402370</p>
          <p>Address: P6 Indira nagra, Nashik, India</p>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
