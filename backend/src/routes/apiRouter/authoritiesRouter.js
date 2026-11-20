const { Router } = require("express");
const Authority = require("./../../models/Authority");

const authoritiesRouter = Router();

authoritiesRouter.get("/", async (req, res, next) => {

    const authorities = await Authority.find({}).populate("type");
    const data = authorities.map(auth => ({ 
        type: auth?.type?.type,
        name: auth.name,
        phoneNumbers: auth.phoneNumbers,
        whatsappNumber: auth.whatsappNumber,
        region: auth.region,
        address: auth.address
    }))
    res.json({
        authorities: data
    });
});

module.exports = authoritiesRouter;