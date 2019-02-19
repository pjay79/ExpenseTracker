import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes';

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running on Port:', PORT);
});
