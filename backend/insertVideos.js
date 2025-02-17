const Video = require('./models/Video'); // Import the Video model

const insertVideos = async (req, res) => {
  const videos = [
    {
      videoId: '4kFg2EqEIv8', // Updated to videoId
      title: 'Introduction to Web Development', // Updated to title
      keywords: ['web development', 'HTML', 'CSS', 'JavaScript'],
      url: 'https://www.youtube.com/watch?v=4kFg2EqEIv8', // Updated to url
    },
    {
      videoId: 'AP3_V7KXHs4', // Updated to videoId
      title: 'CSS Basics', // Updated to title
      keywords: ['JavaScript', 'programming', 'web development','CSS'],
      url: 'https://www.youtube.com/watch?v=AP3_V7KXHs4', // Updated to url
    },
    {
      videoId: 'suCgvxW27og', // Updated to videoId
      title: 'Machine Learning Facts', // Updated to title
      keywords: ['Node.js', 'REST API', 'backend development','Machine Learning'],
      url: 'https://www.youtube.com/watch?v=suCgvxW27og', // Updated to url
    },
    {
      videoId: 'Q4p8vRQX8uY', // Updated to videoId
      title: 'Variables in Javascript', // Updated to title
      keywords: ['CSS', 'HTML', 'Javascript'],
      url: 'https://www.youtube.com/watch?v=Q4p8vRQX8uY', // Updated to url
    },
    {
      videoId: 'zIdg7hkqNE0', // Updated to videoId
      title: 'Basics of Java', // Updated to title
      keywords: ['Java', 'backend development'],
      url: 'https://www.youtube.com/watch?v=zIdg7hkqNE0', // Updated to url
    },
  ];

  try {
    await Video.insertMany(videos);
    res.status(200).json({ message: 'Videos inserted successfully' });
  } catch (error) {
    console.error('Error inserting videos:', error);
    res.status(500).json({ error: 'Error inserting videos', details: error.message });
  }
};

module.exports = insertVideos;
