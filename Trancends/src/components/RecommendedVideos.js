import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendedVideos = ({ query }) => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const fetchRecommendedVideos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recommend', {
          params: { query }
        });
        setRecommendedVideos(response.data);
      } catch (error) {
        console.error('Error fetching recommended videos:', error);
      }
    };

    if (query) {
      fetchRecommendedVideos();
    }
  }, [query]);

  return (
    <div className="recommended-videos">
      <h3>Recommended Videos</h3>
      <ul>
        {recommendedVideos.map((video) => (
          <li key={video.id}>
            <a href={video.url}>{video.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedVideos;
