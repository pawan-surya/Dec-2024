const express = require('express');
const app = express();

// Your routes and middleware go here
app.get('/', (req, res) => res.status(200).send('OK'));

module.exports = app;  // Export the app instance for testing
