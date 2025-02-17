// SearchResults.js
import React from 'react';
import '../styles/SearchResults.css';

const SearchResults = ({ videos }) => {
  // Check if videos is not an array
  if (!Array.isArray(videos)) {
    // Render a message indicating that no search results were found
    return (
      <div className="search-results">
        <h2>Search Results</h2>
        <p>No search results found.</p>
      </div>
    );
  }

  // Render the search results if videos is an array
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
