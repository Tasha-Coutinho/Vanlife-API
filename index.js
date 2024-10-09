//INDEX.JS

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products-model');
const app = express();
const productRoute =require('./routes/van-route.js');


//midlleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//vanroutes
app.use('/api/products',productRoute);




// Home route
app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});



// Get all products route
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// MongoDB connection and server start
mongoose
  .connect(
    'mongodb+srv://natasha:tashabackendauth@backend.8kjvh.mongodb.net/Node-API2?retryWrites=true&w=majority&appName=backend'
  )
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
