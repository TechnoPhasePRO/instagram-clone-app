const express = require("express");
const authController = require("./controllers/authController");
const postController = require("./controllers/postController");
const imageController = require("./controllers/imageController");

const app = express();

app.use(express.json());

app.post("/api/login", authController.login);
app.post("/api/signup", authController.signup);

app.get("/api/posts", postController.getPosts);
app.post("/api/posts/create", postController.createPost);
app.post("/api/posts/:postId/like", postController.likePost);
app.post("/api/posts/:postId/dislike", postController.dislikePost);
app.get("/api/posts/:postId/likes", postController.getLikesForPost);

app.get("/api/posts/:postId/images", imageController.getImagesForPost);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
