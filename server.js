/**
 * server.js - Server for the application
 */

/* Importing modules */
const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

/* Creating the server */
const server = http.createServer(app);

/* Setting up the server */
const port = process.env.PORT || 3000;

/* Starting the server */
server.listen(port, () => {
		console.log(`Server started on port ${port}`);
});

/* Exporting the server */