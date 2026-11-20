const Joi = require("joi");
const t = Joi.object({

});

const validateRequest = (schema) => async (req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body, { abortEarly: false })
        req.validatedBody = value;
        next();
    } catch(error) {
        next(error);
    }

};

module.exports = validateRequest;