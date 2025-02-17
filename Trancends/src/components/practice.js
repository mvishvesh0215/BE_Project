import React from 'react';
import { Link } from 'react-router-dom';
import quizImage from '../assets/quiz.jpg';
import codingImage from '../assets/coding.jpg';
import '../styles/Practice.css';

const Practice = () => {
  return (
    <div>
      <h1>Let's get started with:</h1>
      <div className="practice-container">
        <div className="practice-item">
          <Link to="/quiz">
            <img src={quizImage} alt="Quiz" />
            <h2>Quiz</h2>
          </Link>
        </div>
        <div className="practice-item">
          <Link to="/coding">
            <img src={codingImage} alt="Coding" />
            <h2>Coding</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Practice;