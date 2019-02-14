import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();
const PORT = 3001;

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
