const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/product.controller');

router.get('/getAll', getAllProducts); 

module.exports = router;
