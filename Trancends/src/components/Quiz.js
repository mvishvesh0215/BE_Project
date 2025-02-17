import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Quiz.css';
import { getQuestionsBySubject } from './questions';

const Quiz = () => {
  const { subject } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedVisitedQuestions = JSON.parse(localStorage.getItem('visitedQuestions')) || [];
    const questions = getQuestionsBySubject(subject);
    const unvisitedQuestions = questions.filter(
      question => !storedVisitedQuestions.includes(question.id)
    );
    const randomQuestions = unvisitedQuestions.slice(0, 10);
    setDisplayQuestions(randomQuestions);
  }, [subject]);

  const handleNext = () => {
    if (currentQuestionIndex < displayQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleAnswer = (event) => {
    const selectedIndex = parseInt(event.target.value);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedIndex;
    setAnswers(updatedAnswers);
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const visitedQuestions = JSON.parse(localStorage.getItem('visitedQuestions')) || [];
    displayQuestions.forEach(question => visitedQuestions.push(question.id));
    localStorage.setItem('visitedQuestions', JSON.stringify(visitedQuestions));
  
    const score = calculateScore();
    alert(`Your score: ${score}/${displayQuestions.length}`);
  };

  const calculateScore = () => {
    let score = 0;
    displayQuestions.forEach((question, index) => {
      if (answers[index] === question.answerIndex) { // Compare selected answer with correct answer index
        score++;
      }
    });
    return score;
  };

  const renderResults = () => {
    const score = calculateScore();
    return (
      <div className="results-container">
        <h2>Quiz Results</h2>
        <p>Your score: {score}/{displayQuestions.length}</p>
        <p>Correct Answers:</p>
        <ul>
          {displayQuestions.map((question, index) => (
            <li key={index}>
              {question.answerIndex === answers[index] ? '✅' : '❌'} {question.options[question.answerIndex]}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      <div className="question-container">
        {displayQuestions.length > 0 && !submitted && (
          <>
            <h2>{displayQuestions[currentQuestionIndex].question}</h2>
            <form>
              <ul>
                {displayQuestions[currentQuestionIndex].options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name={`question_${currentQuestionIndex}`}
                        value={index}
                        checked={answers[currentQuestionIndex] === index}
                        onChange={handleAnswer}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </form>
            <div className="navigation-buttons">
              <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
              <button onClick={handleNext} disabled={currentQuestionIndex === displayQuestions.length - 1}>Next</button>
              {currentQuestionIndex === displayQuestions.length - 1 && (
                <button onClick={handleSubmit}>Submit</button>
              )}
            </div>
          </>
        )}
        {submitted && renderResults()}
      </div>
      <div className="question-list-container">
        <h3>Question List</h3>
        <ul>
          {displayQuestions.map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handleJumpToQuestion(index)}
                className={currentQuestionIndex === index ? 'selected' : ''}
              >
                Question {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
