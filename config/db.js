const { Sequelize } = require('sequelize'); // Asegúrate de desestructurar la clase Sequelize

// Crear instancia de Sequelize
const sequelize = new Sequelize('aws_practice', 'root', 'root24', {
    host: 'localhost',
    port: 3306, 
    dialect: 'mysql',
});

// Verificar conexión
sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch((err) => console.error('Error al conectar con la base de datos:', err));

module.exports = sequelize;
