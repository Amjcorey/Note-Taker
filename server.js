// Import
const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const apiRoutes = require("./routes");

// Port
const port = process.env.PORT || 5500;

const app = express();

app.use(clog);

app.use(express.static("public"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

// GET route for homepage  ->  sends back the index.html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET route for notes page  ->  sends back the notes.html page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// GET route for notes api  ->  reads the db.json file and sends back the parsed JSON data
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "db", "db.json"));
});

// GET route for all other pages
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// App.listen
app.listen(port, () =>
  console.log(`Example app is listening on port ${port}!`)
);
