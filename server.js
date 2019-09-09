const express = require('express');

// const db = require('./data/dbConfig.js');
const accountsRouter = require('./data/accounts/accountsRouter')

const server = express();

server.use(express.json());

server.unsubscribe('/api/accounts', accountsRouter)

server.use('/', (req, res) => {
	res.send('<h1>Hello from Todays project</h1>');
});

module.exports = server;
