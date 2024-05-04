let noteRouter = require("express").Router();
let noteRoutes = require("./notes.js");

noteRouter.use("/note", noteRoutes);


module.exports = noteRouter;