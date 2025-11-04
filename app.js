// // Import the 'http' module
// const http = require('http');

// // Create a server that responds with "Hello World"
// const server = http.createServer((req, res) => {
// res.statusCode = 200; // Set HTTP status code
// res.setHeader('Content-Type', 'text/plain'); // Set content type
// res.end('Hello World'); // Send response
// });

// // Define the port and start the server
// const PORT = 3000;

// console.log("Hello, World!");
// // server.listen(PORT, () => {
// // console.log(`Server running at http://localhost:${PORT}/`);
// // });




const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Portfolio website is running at http://localhost:${PORT}`);
});
