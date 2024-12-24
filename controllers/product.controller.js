const db = require('../models');
const Product = db.Product;

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.findAll();

        if (!product) {
            return res.status(404).json({ message: 'Productos no encontrados!', product });
        }
        return res.status(200).json({ message: 'Login exitoso', product });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los Productos' });
    }
};

module.exports = { getAllProducts };

