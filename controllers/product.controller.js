const db = require('../models');
const Product = db.Product;

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.findAll();

        if (!product) {
            return res.status(404).json({ message: 'Products not found', product });
        }

        return res.status(200).json({ message: 'Products:', product });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

module.exports = { getAllProducts };

