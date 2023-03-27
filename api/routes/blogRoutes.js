const { Router } = require("express");
const blogRouter = Router();
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
blogRouter.post("/", protect, createBlog);
blogRouter.post("/:id", protect, updateBlog);
blogRouter.delete("/:id", protect, deleteBlog);
module.exports = blogRouter;
