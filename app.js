const express = require('express');  // Import the express module
const app = express();  // Create an instance of the express app

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
