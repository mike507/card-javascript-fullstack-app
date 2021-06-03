const Item = require('../models/item');
const multer = require('multer');
const fs = require('fs');

const DEFAULT_ITEMS = require('../middleware/mock-item');

exports.createItem = (req, res, next) => {
	if (req.file) {
		const imageUrl = req.file.path.replace(/^assets/, '').replace(/\\/g, '/');
		let item = new Item({ ...JSON.parse(req.body.item) });
		item.imageUrl = imageUrl;
		item.save()
			.then(() => res.status(201).json({ message: 'Objet enregistré !' }))
			.catch((error) => res.status(400).json({ error }));
	} else {
		res.status(400).json({ message: 'Image à créer pas trouvée !' });
	}
};

exports.getOneItem = (req, res, next) => {
	Item.findOne({
		_id: req.params.id,
	})
		.then((item) => {
			res.status(200).json(item);
		})
		.catch((error) => {
			res.status(404).json({
				error: error,
			});
		});
};

exports.modifyItem = (req, res, next) => {
	let itemObject;

	if (req.file) {
		itemObject = new Item({ ...JSON.parse(req.body.item) });
		itemObject.imageUrl = req.file.path.replace(/^assets/, '').replace(/\\/g, '/');
	} else {
		itemObject = new Item({ ...JSON.parse(req.body) });
	}

	Item.updateOne({ _id: req.params.id }, { ...itemObject, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet modifié !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteItem = (req, res, next) => {
	console.log(req.params.id);
	Item.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).json({
				message: 'Item supprimé',
			});
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};

exports.getAllItem = (req, res, next) => {
	Item.find()
		.then((items) => {
			res.status(200).json(items);
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};
