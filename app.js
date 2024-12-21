const express = require('express');
const app = express();

// Your routes and middleware go here how to check
app.get('/', (req, res) => res.status(200).send('My Node js First Add using CI-CD'));

module.exports = app;  // Export the app instance for testing
