const express = require('express');
const bcrypt = require('bcryptjs');
const connection = require('../db/mysql');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  connection.query('INSERT INTO Users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
    if (err) {
      return res.status(500).send('Error registering user');
    }
    res.status(201).send('User registered');
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  connection.query('SELECT * FROM Users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      return res.status(500).send('Error logging in');
    }

    if (results.length === 0) {
      return res.status(400).send('User not found');
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).send('Invalid credentials');
    }

    res.status(200).send('Login successful');
  });
});

module.exports = router;
