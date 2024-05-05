// Import
const express = require("express");
const path = require("path");
const { clog } = require("middleware/clog.js");
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
app.get("/note", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "note.html"));
});

// GET route for notes api  ->  reads the db.json file and sends back the parsed JSON data
app.get("/api/note", (req, res) => {
  res.sendFile(path.join(__dirname, "db", "db.json"));
});

// GET route for all other pages
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Reads the newly added notes from the request body and then adds them to the db.json file
// const readThenAppendToJson = (content, file) => {
//   fs.readFile(file, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       parsedData.push(content);
//       writeNewNoteToJson(file, parsedData);
//     }
//   });
// };

// Writes data to db.json -> utilized within the readThenAppendToJson function
// const writeNewNoteToJson = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );

// Post route -> receives a new note, saves it to request body, adds it to the db.json file, and then returns the new note to the client
// app.post("/api/notes", (req, res) => {
//   const { title, text } = req.body;
//   if (title && text) {
//     const newNote = {
//       title: title,
//       text: text,
//       id: uniqid(),
//     };

//     readThenAppendToJson(newNote, "Develop/db/db.json");

//     const response = {
//       status: "success",
//       body: newNote,
//     };

//     res.json(response);
//   } else {
//     res.json("Error in posting new note");
//   }
// });

// Delete route -> reads the db.json file, uses the json objects uniqids to match the object to be deleted, removes that object from the db.json file, then re-writes the db.json file
// app.delete("/api/notes/:id", (req, res) => {
//   let id = req.params.id;
//   let parsedData;
//   fs.readFile("Develop/db/db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       parsedData = JSON.parse(data);
//       const filterData = parsedData.filter((note) => note.id !== id);
//       writeNewNoteToJson("Develop/db/db.json", filterData);
//     }
//   });
//   res.send(`Deleted note with ${req.params.id}`);
// });

// App.listen
app.listen( port, () => console.log(`Example app is listening on port ${port}!`));
