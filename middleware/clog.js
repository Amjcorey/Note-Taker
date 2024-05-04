function clog(req, res, next) {
    console.log(`[${req.method}] ${req.path}`);
    next(); // Call the next middleware
}

exports.clog = clog;