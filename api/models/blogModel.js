const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Blog = mongoose.model("Blogs", blogSchema);

module.exports = Blog;
