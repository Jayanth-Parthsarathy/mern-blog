const { Router } = require("express");
const blogRouter = Router();
const upload = require("../middleware/multerMiddleware");
const { protect } = require("../middleware/authMiddleware");
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getUserBlogs,
} = require("../controllers/blogController");

blogRouter.get("/", getBlogs);
blogRouter.get("/user", protect, getUserBlogs);
blogRouter.get("/:id", getBlog);
blogRouter.post("/", protect, upload.single("image"), createBlog);
blogRouter.post("/:id", protect, upload.single("image"), updateBlog);
blogRouter.delete("/:id", protect, deleteBlog);
module.exports = blogRouter;
