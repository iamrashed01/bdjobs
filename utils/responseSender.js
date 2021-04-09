module.exports.errorSend = (
  res,
  statusCode = 500,
  error = 'Something went wrong!',
) => {
  if (res) {
    return res.status(statusCode).json({ error, success: false });
  }
  throw new Error('Pass required arguments to the errorSender');
};

module.exports.successSend = (
  res,
  statusCode = 200,
  data = null,
  message = 'Operation successfull.',
  success = true,
) => {
  if (res) {
    return res.status(statusCode).json({ data, message, success });
  }
  throw new Error('Pass required arguments to the successSender');
};
