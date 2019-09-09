const express = require('express');
const db = require('./accountsDb');
const router = express.Router();

// get
router.get('/', (req, res) => {
	db.get()
		.then(acc => {
			res.status(200).json(acc);
			return;
		})
		.catch(err => {
			console.log('Error', err);
			res.status(500).json({ error: 'account could not be retrieved' });
		});
});

module.exports = router;
