const mongoose = require('mongoose');
const validator = require('validator');

const ipcamSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
});

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    require: [true, 'An email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    require: [true, 'Password is required'],
    minlength: 8,
    select: false,
  },
  ipcams: [ipcamSchema]
});

const customer = mongoose.model('customer', customerSchema);

module.exports = customer;
