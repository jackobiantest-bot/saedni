const Authority = require("./../models/Authority");
const httpStatus = require("http-status");
module.exports.index = async (req, res, next) => {
    try {
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
    } catch(error) {
        next(error);
    }
}

module.exports.store = async (req, res, next) => {
    try {
        const authority = await Authority.create(req.validatedBody);
        res.status(httpStatus.CREATED).json({
            authority
        });
    } catch (error) {
        next(error)
    }
}