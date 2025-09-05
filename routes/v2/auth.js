const express = require('express');
const router = express.Router();
const User = require('../../models/v2/user');
const jwt = require('jsonwebtoken');

// Register user (admin only, you can restrict later)
router.post('/register', async (req, res) => {
  const { username, password, role, refId } = req.body;
  try {
    let userExists = await User.findOne({ username });
    if(userExists) return res.status(400).json({ message: 'User exists' });

    const user = new User({ username, password, role, refId });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;