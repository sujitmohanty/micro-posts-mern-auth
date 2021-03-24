const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./config/db');

//Import routes
const posts = require('./routes/post');
const users = require('./routes/user');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

//Accept JSON data in the body
app.use(express.json());
app.use(cors());

app.use('/api', posts);
app.use('/api', users);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is now running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`
  )
);
