const Joi = require("joi");


const authorityValidator = Joi.object({
    type: Joi.string().required(),
    name: Joi.string().required(),
    phoneNumbers: Joi.array().items(Joi.string()).required(),
    whatsappNumber: Joi.string().optional(),
    region: Joi.string().optional(),
    address: Joi.string().optional()
});

module.exports = authorityValidator;