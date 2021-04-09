const _ = require('lodash');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { signupValidator } = require('../validations/authValidator');
const { errorSend, successSend } = require('../utils/responseSender');
const sendEmail = require('../utils/sendEmail');

exports.registerController = async (req, res) => {
  const { error } = signupValidator(req.body);
  if (error) {
    return errorSend(res, 400, error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return errorSend(res, 400, 'User already exists');
  }

  const code = Math.floor(100000 + Math.random() * 900000);
  const salt = await bcrypt.genSalt(10);
  user = await User(
    _.pick(req.body, ['name', 'gender', 'skills', 'email', 'password', 'phone']),
  );
  user.password = await bcrypt.hash(user.password, salt);
  user.email_verification_code = await bcrypt.hash(toString(code), salt);
  await user.save();
  sendEmail(user.email, code, 'Verification code');
  return successSend(
    res,
    200,
    _.pick(user, [
      '_id',
      'name',
      'gender',
      'skills',
      'phone',
      'email',
      'email_verification_status',
      'phone_verification_status',
    ]),
    'Registration Successfull, Verification code has been sent.',
  );
};

exports.loginController = async (req, res) => {
  res.status(200).json({ auth_token: 'fiifei-auth_token' });
};
