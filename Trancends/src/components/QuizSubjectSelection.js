import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/QuizSubjectSelection.css'; // Import the CSS file

const subjects = [
  { name: 'Machine Learning', path: '/quiz/machine-learning' },
  { name: 'Data Structures & Algorithms', path: '/quiz/dsa' },
  { name: 'Web Development', path: '/quiz/web-development' },
];

const QuizSubjectSelection = () => {
  const handleResetVisited = () => {
    localStorage.removeItem('visitedQuestions');
    alert("Visited questions reset!");
  };

  return (
    <div className="subject-selection-container">
      <h1>Select a Quiz Subject:</h1>
      <div className="subject-list">
        {subjects.map((subject, index) => (
          <Link key={index} to={subject.path} className="subject-item">
            {subject.name}
          </Link>
        ))}
      </div>
      <button onClick={handleResetVisited} className="reset-button">Reset Visited Question</button> {/* Add class name for the button */}
    </div>
  );
};

export default QuizSubjectSelection;