const db = require('../models');
const User = db.User;

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (user.password === password) {
            return res.status(200).json({ message: 'Login exitoso', user });
        } else {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
};


const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ where: { email } });

        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const user = await User.create({ username, email, password });

        res.status(201).json({ message: 'Usuario registrado exitosamente', user });
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
};




module.exports = { login, register };
