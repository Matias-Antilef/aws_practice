const bcrypt = require('bcrypt');
const db = require('../models');
const User = db.User;

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ where: { email } });

        if (!userExists) {
            return res.status(404).json({ message: 'User dont exists' });
        }

        if (userExists.password === password) {
            return res.status(200).json({ message: 'Approved', userExists });

        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};


const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ where: { email } });
        
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, email, password: hashedPassword });

        return res.status(201).json({ message: 'User created successfully' });
    
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const getUsers = async (req, res) => {
    try {
        const userAll = await User.findAll();

        if (!userAll) {
            return res.status(400).json({ message: 'Dont exists users' });
        }
        return res.status(200).json({ message: 'Users:', userAll });
    
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

module.exports = { login, register, getUsers };
