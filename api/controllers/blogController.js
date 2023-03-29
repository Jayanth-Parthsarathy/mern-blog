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
  const { title, body, summary } = req.body;
  const image = req.file.path.split("/").pop();
  const newBlog = await Blog.create({
    title,
    body,
    image,
    summary,
    user: req.user._id,
  });
  res.status(201).send(newBlog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const { title, summary, body } = req.body;
  const filter = {
    _id: req.params.id,
    user: req.user._id,
  };
  const blog = await Blog.findOne(filter);
  try {
    const image = req.file.path.split("/").pop();
    const blogU = await Blog.findOneAndUpdate(filter, {
      title,
      summary,
      body,
      image,
    });
    const updated = await Blog.findOne(filter);
    res.status(200).send(updated);
  } catch (err) {
    const upImage = blog.image;
    const blogU = await Blog.findOneAndUpdate(filter, {
      title,
      summary,
      body,
      image: upImage,
    });
    const updated = await Blog.findOne(filter);
    res.status(200).send(updated);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const filter = {
    _id: req.params.id,
    user: req.user._id,
  };
  const blog = await Blog.findOneAndDelete(filter);
  res.status(200).send(blog);
});

const getUserBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user._id });
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
