const express = require('express');
const morgan = require('morgan');
const customerRouter = require('./routes/customerRouter');
const cors = require("cors");

const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json()); //express.json() => this is a middleware
// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

app.use('/api/v1/customers', customerRouter);

module.exports = app;
