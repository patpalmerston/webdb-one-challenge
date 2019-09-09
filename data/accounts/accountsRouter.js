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

// get by id
router.get('/:id', (req, res) => {
	const { id } = req.params;
	db.getById(id)
		.then(acc => {
			res.status(200).json(acc);
		})
		.catch(err => {
			console.log('Error', err);
			res.status(500).json({ error: 'account could not be retrieved' });
		});
});

// add new account
router.post('/', (req, res) => {
	const accData = req.body;
	db.insert(accData)
		.then(acc => {
			res.status(200).json(acc);
		})
		.catch(err => {
			res.status(500).json({
				error: 'there was an error while saving the account to the database'
			});
		});
});

// delete account
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	db.remove(id)
		.then(acc => {
			if (acc) {
				res.status(200).json({ Message: 'Account Deleted', id });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'not able to delte account' });
		});
});

module.exports = router;
