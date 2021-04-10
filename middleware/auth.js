const jwt = require('jsonwebtoken');
const { errorSend } = require('../utils/responseSender');

module.exports = async (req, res, next) => {
  const auth_token = req.headers.authorization.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    return next();
  } catch (error) {
    return errorSend(res, 403, 'You are not authorized!');
  }
};
