const db = require("../db");

const postController = {
  getPosts: async (req, res) => {
    try {
      const { page = 1, pageSize = 10 } = req.query;
      const offset = (page - 1) * pageSize;

      const posts = await db.query(
        "SELECT * FROM posts ORDER BY created_at DESC LIMIT ?, ?",
        [offset, pageSize]
      );

      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const { userId, caption } = req.body;

      const result = await db.query(
        "INSERT INTO posts (user_id, caption) VALUES (?, ?)",
        [userId, caption]
      );

      res.json({
        postId: result.insertId,
        message: "Post created successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  likePost: async (req, res) => {
    try {
      const { postId, userId } = req.body;

      const result = await db.query(
        "INSERT INTO likes (post_id, user_id) VALUES (?, ?)",
        [postId, userId]
      );

      res.json({ likeId: result.insertId, message: "Post liked successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getLikesForPost: async (req, res) => {
    try {
      const { postId } = req.params;

      const likes = await db.query(
        "SELECT u.username FROM likes l JOIN users u ON l.user_id = u.user_id WHERE l.post_id = ?",
        [postId]
      );

      res.json(likes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = postController;
