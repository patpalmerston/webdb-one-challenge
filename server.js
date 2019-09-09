const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/', (req, res) => {
	res.send('<h1>Hello from Todays project</h1>');
});

module.exports = server;
