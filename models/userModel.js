const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    max: 255,
    required: true,
  },
  phone: String,
  email_verification_status: {
    type: Number,
    default: 0,
  },
  phone_verification_status: {
    type: Number,
    default: 0,
  },
  verification_code: String,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({
    email: this.email,
    id: this.id,
  }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
