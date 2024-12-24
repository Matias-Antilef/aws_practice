const express = require('express');
const router = express.Router();
const {} = require('../controllers/cart.controller');

router.get('/payCart', getAllProducts); 

module.exports = router;
