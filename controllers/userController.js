const User = require('../models/userModel');
const { successSend, errorSend } = require('../utils/responseSender');
const { updateProfileValidator } = require('../validations/userValidator');

module.exports.getProfileController = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).select(
    '-password -email_verification_code',
  );

  if (!user) {
    errorSend(res, 401, 'User not found');
  }

  return successSend(res, 200, user, 'User retrieved successfully');
};

module.exports.updateProfileController = async (req, res) => {
  const { error } = updateProfileValidator(req.body);
  if (error) {
    return errorSend(res, 400, error.details[0].message);
  }

  const user = await User.findOne({ email: req.user.email }).select('-verification_code -password ');

  if (!user) {
    errorSend(res, 401, 'User not found');
  }

  user.name = req.body.name;
  user.gender = req.body.gender;
  user.skills = req.body.skills;
  user.phone = req.body.phone;
  await user.save();

  return successSend(res, 200, user, 'User retrieved successfully');
};
