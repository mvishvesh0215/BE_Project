import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Learn from './components/Learns';
import LearnNavbar from './components/LearnNavbar';
import Guidance from './components/guidance';
import Practice from './components/practice';
// import Profile from './components/profile';
import Quiz from './components/Quiz';
import QuizSubjectSelection from './components/QuizSubjectSelection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isLearnRoute = location.pathname.startsWith('/learn');

  return (
    <>
      {isLearnRoute ? <LearnNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learn/*" element={<LearnPage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/guidance" element={<Guidance />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/quiz" element={<QuizSubjectSelection />} />
        <Route path="/quiz/:subject" element={<Quiz />} />
      </Routes>
    </>
  );
};

const LearnPage = () => {
  return (
    <div>
      <Learn />
      {/* Add more routes for the Learn page as needed */}
    </div>
  );
};

export default App;