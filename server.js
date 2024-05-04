// Import express, path, and file system (fs)
const express = require("express");
const fs = require("fs");
const path = require("path");
// Helper method for generating unique ids
const uniqid = require("uniqid");

// Port
const PORT = process.env.PORT || 3001;

// Creates new app with express
const app = express();

app.use(clog);

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

// GET route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// GET route for notes page
app.get('/note', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'note.html'));
})

// GET route for notes api
app.get('/api/note', (req, res) => {
    res.sendFile(path.join(__dirname, 'db', 'db.json'));
})

// GET route for all other pages
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));