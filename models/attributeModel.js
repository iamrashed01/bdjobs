const mongoose = require('mongoose');

const Attribute = mongoose.model('Attribute', new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: Number,
    default: 0,
  },
}));

module.exports = Attribute;
