const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
});

userSchema.methods.generateAuthToken = function () {
  const token = this.username;
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
