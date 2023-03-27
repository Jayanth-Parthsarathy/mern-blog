const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log("Connected to db"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/user", userRouter);
app.use("/blogs", blogRouter);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("Hello World Test");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
