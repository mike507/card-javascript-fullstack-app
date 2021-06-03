//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');

const stuffRoutes = require('./routes/stuff');
const stuffRenderRoutes = require('./routes/stuff-render');
const port = process.env.PORT || 5000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/cards', stuffRenderRoutes);
app.use('/api/v1/cards', stuffRoutes);
app.use(express.static(path.join(__dirname, 'assets')));
mongoose
	.connect(process.env.CARDS_DB_URI, { useNewUrlParser: true })
	.catch((err) => {
		console.error(err.stack);
		process.exit(1);
	})
	.then(
		app.listen(port, () => {
			console.log(`Server started on port ${port}`);
		})
	);
