const express = require('express');

// const db = require('./data/dbConfig.js');
const accountsRouter = require('./data/accounts/accountsRouter')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter)

server.get('/', (req, res) => {
	res.send('<h1>Hello from Todays project</h1>');
});

module.exports = server;
