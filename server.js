const app = require('./app');  // Import the app from app.js

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
