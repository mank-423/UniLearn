const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');

router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    //If username not found
    if (!user) {
      return res.json({ status: 'error', message: 'User details not found' });
    }

    // Validate the password
    if (user.password !== req.body.password) {
      return res.json({ status: 'error', message: 'Incorrect password' });
    }

    return res.json({ status: 'ok', user: true });
  } catch (error) {
    console.error(error);
    return res.json({ status: 'error', message: 'Server error' });
  }
});

module.exports = router;
