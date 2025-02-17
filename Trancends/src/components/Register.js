import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const { username, email, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        const response = await axios.post('http://localhost:3001/api/auth/register', {
          name: username, // Changed from 'name' to 'username'
          email,
          password,
        });

        if (response.status === 200 || response.status === 201) {
          // Signup successful, redirect or perform actions
          console.log('Signup successful');
          navigate('/login');
        } else {
          setError('Signup failed');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        setError('Signup failed');
      }
    }
  };

  return (
    <div className="registration-container">
      <h2>Register Now</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="registration-form" method='POST' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirmPassword" value={confirmPassword} onChange={onChange} required />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Registration;
