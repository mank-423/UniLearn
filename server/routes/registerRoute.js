const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');

router.post('/', async (req, res) => {
  try {

    // Check if the email is already in use
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({ status: 'error', error: 'Email is already in use' });
    }

    // If username is required and should be unique, check it as well
    if (req.body.username) {
      const existingUsernameUser = await User.findOne({ username: req.body.username });
      if (existingUsernameUser) {
        return res.json({ status: 'error', error: 'Username is already in use' });
      }
    }

    const user = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      course: req.body.course,
      year: req.body.year,
    });

    res.json({ status: 'ok' });
  } catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'Fault in the data' });
  }
});

module.exports = router;
