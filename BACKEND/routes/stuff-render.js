const express = require('express');
const router = express.Router();

const stuffRenderCtrl = require('../controllers/stuff-render');
const multer = require('../middleware/multer-config');

router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

router.get('/', stuffRenderCtrl.getAllItem);
router.get('/:id', stuffRenderCtrl.getOneItem); 

module.exports = router;
