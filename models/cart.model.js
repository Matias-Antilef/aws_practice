module.exports = (sequelize, DataTypes) => {

const Cart = sequilize.define('cart', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})}