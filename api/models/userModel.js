const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
