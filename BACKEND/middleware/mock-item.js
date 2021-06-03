const Item = require('../models/item');

const item1 = new Item({
	imageUrl: '/images/parispanorama.jpg',
	title: 'Paris, France',
	description: 'Panorama avec la Tour Eiffel',
});

const item2 = new Item({
	imageUrl: '/images/parisarcdetriomphe.jpg',
	title: 'Paris, France',
	description: 'Arc de triomphe à Paris',
});

const item3 = new Item({
	imageUrl: '/images/parislaseine.jpg',
	title: 'Paris, France',
	description: 'Panorama de la Seine à Paris',
});

const item4 = new Item({
	imageUrl: '/images/parispont.jpg',
	title: 'Paris, France',
	description: 'Pont Alexandre III à Paris',
});

const item5 = new Item({
	imageUrl: '/images/parisladefense.jpg',
	title: 'Paris, France',
	description: "La Defense, quartier d'affaires",
});

const item6 = new Item({
	imageUrl: '/images/chateau.jpg',
	title: 'Roumanie ',
	description: 'Un vieux chateau',
});

const item7 = new Item({
	imageUrl: '/images/rue.jpg',
	title: 'Roumanie',
	description: 'Une rue atypique',
});

const item8 = new Item({
	imageUrl: '/images/pommes.jpg',
	title: 'Roumanie',
	description: 'Pommes biologiques',
});

const DEFAULT_ITEMS = [item1, item2, item3, item4, item5, item6, item7, item8];

module.exports = DEFAULT_ITEMS;
