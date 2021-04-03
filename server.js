const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./db/connectDB');

// create applications
const app = express(); // main application
const admin = express(); // admin application as sub application

// middlewares
app.use(cors());
app.use(morgan('dev'));

// mounting sub app
app.use('/admin', admin);

// routes
app.get('/api', (req, res) => {
  res.send('welcome to bdjobs');
});
app.use('/api/auth', require('./routers/auth'));

// admin
admin.get('/api', (req, res) => {
  res.send('welcome to admin app');
});

// app listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening server on PORT:${port}`);
  connectDB();
});
