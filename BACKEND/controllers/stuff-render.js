const Item = require('../models/item');

const DEFAULT_ITEMS = require('../middleware/mock-item');

exports.getAllItem = (req, res, next) => {
	Item.find()
		.then((items) => {
			if (items.length === 0) {
				Item.insertMany(DEFAULT_ITEMS, function (err) {
					if (err) {
						console.log(err);
					} else {
						res.redirect('/');
						console.log('Successfully saved default items to MongoDB.');
					}
				});
			} else {
				res.status(200).render('list', { listTitle: 'Today', newListItems: items });
			}
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};

exports.getOneItem = (req, res, next) => {
	Item.findOne({
		_id: req.params.id,
	})
		.then((item) => {
			res.status(200).render('detail-content', { item: item });
		})
		.catch((error) => {
			res.status(404).json({
				error: error,
			});
		});
};
