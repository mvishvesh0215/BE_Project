export const questions = {
    'machine-learning': [
      { id: 1, question: 'What is supervised learning?', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], correctAnswerIndex: 0 },
      { id: 2, question: 'Which of the following best describes supervised learning?', options: ['It is a type of machine learning where the model is trained on labeled data.', 'It is a type of machine learning where the model learns without any labeled data.', 'It is a technique used to reduce the dimensionality of data.', 'It is a method for clustering unlabeled data.'], correctAnswerIndex: 0 },
      // Add more questions for machine learning
    ],
    'dsa': [
      { id: 3, question: 'What is a binary search tree?', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], correctAnswerIndex: 0 },
      { id: 6, question: 'Which of the following best describes supervised learning?', options: ['It is a type of machine learning where the model is trained on labeled data.', 'It is a type of machine learning where the model learns without any labeled data.', 'It is a technique used to reduce the dimensionality of data.', 'It is a method for clustering unlabeled data.'], correctAnswerIndex: 0 },
      // Add more questions for DSA
    ],
    'web-development': [
      { id: 4, question: 'What is HTML?', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], correctAnswerIndex: 0 },
      { id: 5, question: 'Which of the following best describes supervised learning?', options: ['It is a type of machine learning where the model is trained on labeled data.', 'It is a type of machine learning where the model learns without any labeled data.', 'It is a technique used to reduce the dimensionality of data.', 'It is a method for clustering unlabeled data.'], correctAnswerIndex: 0 },
      // Add more questions for web development
    ]
  };
  
  export const getQuestionsBySubject = (subject) => {
    return questions[subject] || [];
  };