const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		console.log('multer.destination');
		callback(null, './assets/images');
	},
	filename: (req, file, callback) => {
		console.log('multer.filename');
		const name = file.originalname.split(' ').join('_');
		const fullName = Date.now() + name;
		console.log(fullName);
		callback(null, fullName);
	},
});

module.exports = multer({ storage: storage }).single('image');
