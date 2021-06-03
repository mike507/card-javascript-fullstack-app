const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	imageUrl: String,
	title: String,
	description: String,
});

module.exports = mongoose.model('Item', itemSchema);
