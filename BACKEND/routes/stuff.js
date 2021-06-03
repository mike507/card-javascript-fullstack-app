const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
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

router.get('/', stuffCtrl.getAllItem); 
router.get('/:id', stuffCtrl.getOneItem);
router.post('/', multer, stuffCtrl.createItem); 
router.put('/:id', multer, stuffCtrl.modifyItem); 
router.delete('/:id', stuffCtrl.deleteItem); 

module.exports = router;
