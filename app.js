const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/auth.routes');  
const productRoutes = require('./routes/product.routes');  
// const cartRoutes = require('./routes/cart.routes');  

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Todo ok');
});

app.use('/auth', authRoutes);
app.use('/product', productRoutes);
// app.use('/cart', cartRoutes);


db.sequelize.sync({ force: false })
    .then(() => console.log('Database synced successfully'))
    .catch((err) => console.error('Error syncing database:', err));

module.exports = app;