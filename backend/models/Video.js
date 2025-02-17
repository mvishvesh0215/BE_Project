const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  video_title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  keywords: { type: [String], required: true }
});

module.exports = mongoose.model('Video', VideoSchema);