const User = require('../models/userModel');

exports.registerController = async (req, res) => {
  const user = await User({
    username: 'rashed',
  });

  const token = await user.generateAuthToken();
  user.save();
  res.json({ data: user, auth_token: token });
};

exports.loginController = async (req, res) => {
  res.status(200).json({ auth_token: 'fiifei-auth_token' });
};
