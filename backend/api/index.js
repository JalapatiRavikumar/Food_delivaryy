const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Food Delivery API' });
});

// Sample food items route
app.get('/api/food-items', (req, res) => {
  const foodItems = [
    { id: 1, name: 'Pizza', price: 12.99, category: 'Italian', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Burger', price: 8.99, category: 'American', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Sushi', price: 15.99, category: 'Japanese', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Pasta', price: 10.99, category: 'Italian', image: 'https://via.placeholder.com/150' },
  ];
  
  res.json(foodItems);
});

// Health check route for Vercel
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Define port
const PORT = process.env.PORT || 5000;

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;