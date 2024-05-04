const noteRouter = require("express").Router();
const noteRoutes = require("./note.js");

noteRouter.use("/note", noteRoutes);

module.exports = noteRouter;