const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./mongodb.js');



dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
connectDB();



// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
