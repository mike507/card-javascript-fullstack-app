const Item = require('../models/item');

const item1 = new Item({
	imageUrl: '/images/chateau.jpg',
	title: 'Roumanie',
	description: 'Un vieux chateau',
});

const item2 = new Item({
	imageUrl: '/images/rue.jpg',
	title: 'Roumanie',
	description: 'Une rue atypique',
});

const item3 = new Item({
	imageUrl: '/images/terasse.jpg',
	title: 'Roumanie',
	description: 'Une terasse à la campagnie',
});

const item4 = new Item({
	imageUrl: '/images/pommes.jpg',
	title: 'Roumanie',
	description: 'Pommes biologiques',
});

const DEFAULT_ITEMS = [item1, item2, item3, item4];

module.exports = DEFAULT_ITEMS;
