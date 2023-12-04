const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const generateToken = (userId) => {
  return jwt.sign({ userId }, "your_secret_key", { expiresIn: "1h" });
};

const login = (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const user = results[0];

      bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
          return res
            .status(401)
            .json({ error: "Invalid username or password" });
        }

        const token = generateToken(user.user_id);
        res.status(200).json({ token });
      });
    }
  );
};

const signup = (req, res) => {
  const { username, password, email } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    db.query(
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
      [username, hash, email],
      (error, results) => {
        if (error) {
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const token = generateToken(results.insertId);
        res.status(201).json({ token });
      }
    );
  });
};

module.exports = {
  login,
  signup,
};
