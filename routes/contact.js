/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-tabs */

const express = require('express');

const router = express.Router();

router.get('/AddContact', (req, res) => {
	res.render('AddContact', {
		nav: [{ link: '/addcontact', title: 'Addcontact' }],
		title: 'library',
	});
});

module.exports = router;
