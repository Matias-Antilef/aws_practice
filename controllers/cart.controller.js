// const db = require('../models');
// const Cart = db.Cart;

// const getAllProducts = async (req, res) => {
//     try {
//         const cart = await Cart.findAll();
//         if (!cart) {
//             return res.status(404).json({ message: 'Carrito no encontrado' });
//         }
//         return res.status(200).json({ message: 'Carrito encontrado', cart });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error al obtener el carrito' });
//     }
// };