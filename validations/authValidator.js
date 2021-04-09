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
