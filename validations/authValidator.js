const Joi = require('joi');

module.exports.signupValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string().required(),
    skills: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(255).required(),
    confirm_password: Joi.ref('password'),
    phone: Joi.number().integer().required(),
  }).with('password', 'confirm_password');
  return schema.validate(data);
};

module.exports.loginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
};

module.exports.forgetPasswordValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });
  return schema.validate(data);
};

module.exports.resetPasswordValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    code: Joi.number().min(6),
    password: Joi.string().min(6).max(255).required(),
    confirm_password: Joi.ref('password'),
  });
  return schema.validate(data);
};
