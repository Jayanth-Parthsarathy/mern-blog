const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      user = await User.findById(decoded.id).select("-password");
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      res.status(400);
      throw new Error("Not authorised");
    }
  }
  if (!token) {
    res.status(400);
    throw new Error("Not authorised");
  }
});

module.exports = { protect };
