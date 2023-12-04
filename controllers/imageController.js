const db = require("../db");

const getImagesForPost = (req, res) => {
  const { postId } = req.params;

  db.query(
    "SELECT image_url FROM images WHERE post_id = ?",
    [postId],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error retrieving images for the post" });
      } else {
        res.status(200).json({ images: results });
      }
    }
  );
};

module.exports = {
  getImagesForPost,
};
