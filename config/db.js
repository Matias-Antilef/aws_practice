const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize('aws_practice', 'root', 'root24', {
    host: 'localhost',
    port: 3306, 
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch((err) => console.error('Error al conectar con la base de datos:', err));

module.exports = sequelize;
