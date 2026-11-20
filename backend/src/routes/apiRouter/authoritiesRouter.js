const { Router } = require("express");

const validateRequest = require("./../../middlewares/validateRequest");
const authorityValidator = require("./../../validators/authorityValidator");
const { index, store } = require("./../../controllers/authorityController");
const authoritiesRouter = Router();

authoritiesRouter.route("/")
    .get(index).post(validateRequest(authorityValidator), store);

module.exports = authoritiesRouter;