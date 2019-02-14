require('dotenv').config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/expenses', (req, res) => {
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

app.use(router);

app.listen(PORT, function() {
  console.log('Server is running on Port:', PORT);
});
