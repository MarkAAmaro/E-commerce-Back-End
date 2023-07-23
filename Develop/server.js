require('dotenv').config();

const express = require('express');
const productRoutes = require('./routes/api/product-routes');
const tagRoutes = require('./routes/api/tag-routes');


const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
