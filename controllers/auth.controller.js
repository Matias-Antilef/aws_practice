const db = require('../models');
const User = db.User;

const login = async (req, res) => {
    const { email, password } = req.body; // Recibiendo email y password desde el body de la solicitud
    try {
        // Buscar al usuario en la base de datos por su email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            // Si el usuario no existe
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar si la contraseña es correcta
        // Para este ejemplo, simplemente compararemos las contraseñas directamente (sin cifrado)
        if (user.password === password) {
            // Si la contraseña es correcta
            return res.status(200).json({ message: 'Login exitoso', user });
        } else {
            // Si la contraseña es incorrecta
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    } catch (error) {
        // Manejo de errores
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
