import express from 'express';

const api = express.Router();

api.get('/', (req, res) => {
  res.send('Welcome to the Expenses Tracker!');
});

api.get('/expenses', (req, res) => {
  const expenses = [
    {
      name: 'Wedding Venue',
      vendor: 'Carousel',
      cost: 14000,
      confirmed: true,
    },
    {
      name: 'Reception Venue',
      vendor: 'Eureka SkyDeck',
      cost: 8000,
      confirmed: true,
    },
    {
      name: 'Photographer',
      vendor: 'Ferndara',
      cost: 3700,
      confirmed: true,
    },
  ];
  res.json(expenses);
});

module.exports = api;
