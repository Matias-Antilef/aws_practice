const express = require('express');
const router = express.Router();
const {login,register,getUsers} = require('../controllers/auth.controller');

// Ruta para el login
router.post('/login', login); 
router.post('/register', register); 
router.get('/getUsers', getUsers); 

module.exports = router;
