const httpStatus = require("http-status")
module.exports = (error, req, res, next) => {
    return res.status(httpStatus.status.INTERNAL_SERVER_ERROR).json({
        error: error.message
    });
}