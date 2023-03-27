const errorHandler = (err, req, res, next) => {
  let statusCode;
  statusCode = req.statusCode || 500;
  res.status(statusCode);
  res.json({
    error: err.message,
    stack: process.env.NODE_ENV == "production" ? "" : err.stack,
  });
};

module.exports = {
  errorHandler,
};
