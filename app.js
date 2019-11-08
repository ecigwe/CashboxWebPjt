/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable indent */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './views');
app.set('view engine', 'ejs');

const addcontactRouter = require('./routes/contact');

app.use('/', addcontactRouter);

app.get('/', (req, res) => {
	res.render('index', {
		nav: [{ link: '/addcontact', title: 'Addcontact' }],
		title: 'library',
	});
});

module.exports = app;
