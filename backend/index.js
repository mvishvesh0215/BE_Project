const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const cors = require('cors');
const User = require('./models/User');
const Video = require('./models/Video');
const insertVideos = require('./insertVideos');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/react_backend', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// User registration route
app.post(
  '/api/auth/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        'your_jwt_secret',
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// User login route
app.post(
  '/api/auth/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        'your_jwt_secret',
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// Insert videos route (for initial data population)
app.post('/insert-videos', insertVideos);

// Route to search videos
app.get('/search', async (req, res) => {
  const { searchTerm } = req.query;
  try {
    const videos = await Video.find({ keywords: { $regex: searchTerm, $options: 'i' } });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to recommend next video
app.get('/recommend', async (req, res) => {
  const { keywords } = req.query;
  const keywordsArray = keywords.split(','); // Convert keywords to an array
  try {
    const recommendations = await Video.find({
      keywords: { $in: keywordsArray },
    }).limit(5); // Adjust the limit as necessary

    console.log('Recommendations:', recommendations); // Log retrieved videos

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
