const Joi = require('joi');

module.exports.updateProfileValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string().required(),
    skills: Joi.string().required(),
    phone: Joi.number().integer().required(),
  });
  return schema.validate(data);
};
