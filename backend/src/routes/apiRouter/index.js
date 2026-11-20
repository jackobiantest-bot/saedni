const { Router } = require("express");

const typesRouter = require("./typesRouter")
const authoritiesRouter = require("./authoritiesRouter");

const apiRouter = Router();

apiRouter.use("/authorities", authoritiesRouter);
apiRouter.use("/emergency-types", typesRouter);

module.exports = apiRouter;