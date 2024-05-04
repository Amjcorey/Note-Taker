let noteRouter = require("express").Router();
let noteRoutes = require("./note.js");

noteRouter.use("/note", noteRoutes);


module.exports = noteRouter;