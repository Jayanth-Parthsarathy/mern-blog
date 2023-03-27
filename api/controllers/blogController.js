const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Blog = require("../models/blogModel");

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.send(blog);
});

const createBlog = asyncHandler(async (req, res) => {
  const { title, body, image, summary } = req.body;
  const newBlog = await Blog.create({
    title,
    body,
    image,
    summary,
    user: req.user.id,
  });
  res.status(201).send(newBlog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const update = req.body;
  const blog = await Blog.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    update
  );
  const updated = await Blog.findOne({
    _id: req.params.id,
    user: req.user,
  });
  res.status(200).send(updated);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });
  res.status(200).send(blog);
});

const getUserBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user.id });
  res.json(blogs);
});
module.exports = {
  getBlogs,
  getBlog,
  updateBlog,
  createBlog,
  deleteBlog,
  getUserBlogs,
};
