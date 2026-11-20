const { Router } = require("express");

const typesRouter = require("./typesRouter")
const authoritiesRouter = require("./authoritiesRouter");

const apiRouter = Router();

apiRouter.use("/authorities", authoritiesRouter)
apiRouter.use("/emergyncy-types", typesRouter);

module.exports = apiRouter;