// Custom middleware that logs out the type and path of each request to the server

function clog(req, res, next) {
  console.log(`[${req.method}] ${req.path}`);
  next(); // Call the next middleware
}

exports.clog = clog;
