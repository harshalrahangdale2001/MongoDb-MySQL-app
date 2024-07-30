const db = require('../config/db');
const bcrypt = require('bcrypt');

const createUser = (username, password, callback) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return callback(err);
    const sql = 'INSERT INTO Users (username, password) VALUES (?, ?)';
    db.query(sql, [username, hash], callback);
  });
};

const findUserById = (id, callback) => {
  const sql = 'SELECT * FROM Users WHERE id = ?';
  db.query(sql, [id], callback);
};

const findUserByUsername = (username, callback) => {
  const sql = 'SELECT * FROM Users WHERE username = ?';
  db.query(sql, [username], callback);
};

module.exports = { createUser, findUserById, findUserByUsername };
