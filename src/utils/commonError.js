// Desc: Error handler middleware
function errorHandler(err, req, res, next) {
  if (res && res.status) {
    return res.status(500).json({ message: err.message });
  }
  next();
}

export default errorHandler;
