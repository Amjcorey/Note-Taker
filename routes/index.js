// Import
const noteRouter = require("express").Router();
const noteRoutes = require("./note.js");

noteRouter.use("/note", noteRoutes);

// Export
module.exports = noteRouter;
