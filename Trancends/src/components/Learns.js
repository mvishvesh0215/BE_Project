import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import learnImage from '../assets/learn.jpg';
import practiceImage from '../assets/practice.jpg';
import guidanceImage from '../assets/guidance.jpg';
import competeImage from '../assets/compete.jpg';
import '../styles/Learns.css';

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/search?searchTerm=${searchTerm}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleVideoCompletion = async (keywords) => {
    try {
      const response = await axios.get(`http://localhost:3001/recommend?keywords=${keywords}`);
      console.log('Response from backend:', response.data); // Add this line
      setRecommendedVideos(response.data);
    } catch (error) {
      console.error("Error fetching recommended videos", error);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <div className="container">
        <Link to="/learn" className="section">
          <img src={learnImage} alt="Learn" />
          <h2>Learn</h2>
        </Link>
        <Link to="/practice" className="section">
          <img src={practiceImage} alt="Practice" />
          <h2>Practice</h2>
        </Link>
        <Link to="/guidance" className="section">
          <img src={guidanceImage} alt="Guidance" />
          <h2>Guidance</h2>
        </Link>
        <a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" className="section" target="_self" rel="noopener noreferrer">
          <img src={competeImage} alt="Compete" />
          <h2>Compete</h2>
        </a>
      </div>
      <div className="about-container">
        <h2>About Learning</h2>
        <p>
          Learning is the process of acquiring new knowledge, skills, or behaviors through study, experience, or teaching. It is essential for personal growth and development, as well as for professional advancement. By engaging in learning activities, individuals can expand their understanding of the world, enhance their abilities, and achieve their goals.
        </p>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search videos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          <h2>Search Results:</h2>
          {videos.map(video => (
            <div key={video._id}>
              <h3 onClick={() => handleVideoSelect(video)}>{video.title}</h3>
              <p>{video.keywords.join(', ')}</p>
              <button onClick={() => handleVideoSelect(video)}>
                Watch Video
              </button>
            </div>
          ))}
        </div>
        {selectedVideo && (
          <div className="video-container">
            <div className="video-player">
              <h2>Now Playing: {selectedVideo.title}</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button onClick={() => handleVideoCompletion(selectedVideo.keywords.join(','))}>
                Complete Video
              </button>
            </div>
            <div className="video-recommendations">
              <h2>Recommended Videos:</h2>
              {recommendedVideos.map(video => (
                <div key={video._id}>
                  <h3 onClick={() => handleVideoSelect(video)}>{video.title}</h3>
                  <p>{video.keywords.join(', ')}</p>
                  <button onClick={() => handleVideoSelect(video)}>
                    Watch Video
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
