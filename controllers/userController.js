const User = require('../models/userModel');
const { successSend } = require('../utils/responseSender');

module.exports.getProfileController = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).select(
    '-password -email_verification_code',
  );
  return successSend(res, 200, user, 'User retrieved successfully');
};
