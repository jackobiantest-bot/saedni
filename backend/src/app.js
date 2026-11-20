const express = require("express");
const cors = require("cors");

const apiRouter = require("./routes/apiRouter");

const { APP_VERSION } = process.env;
const app = express();

app.use(express.json());
app.use(cors());
app.use(`/api/${APP_VERSION}`, apiRouter);

module.exports = app;