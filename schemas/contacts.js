const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean(),
});

const contactFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
})

module.exports = { addSchema, contactFavoriteSchema };
