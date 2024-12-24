const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/auth.routes');  

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡API funcionando!');
});

app.use('/auth', authRoutes);


db.sequelize.sync({ force: false })
    .then(() => console.log('Base de datos sincronizada'))
    .catch((err) => console.error('Error al sincronizar la base de datos:', err));

module.exports = app;