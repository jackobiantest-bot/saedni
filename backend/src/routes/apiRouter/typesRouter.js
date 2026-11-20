const { Router } = require("express");
const EmergencyTypes = require("./../../models/emergencyTypeModel");

const typesRouter = Router();

typesRouter.get("/", async (req, res, next) => {

    const emergencyTypes = await EmergencyTypes.find({});

    res.json({
        emergencyTypes
    });
});

module.exports = typesRouter;