const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');

const User = require('./user.model')(sequelize, DataTypes);
const Product = require('./user.model')(sequelize, DataTypes);
const Cart = require('./cart.model', sequelize, DataTypes);

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Product = Product;
db.Cart = Cart;

module.exports = db;