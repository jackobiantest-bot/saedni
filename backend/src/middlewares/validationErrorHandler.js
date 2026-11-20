const httpStatus = require("http-status")
module.exports = (error, req, res, next) => {
    // return res.status(httpStatus.status.BAD_REQUEST).json({
    //     error
    // });
    if (error.name === "ValidationError") {
        const errors = Object.keys(error.details).map(errDetail => ({field: error.details[errDetail].path[0], message: error.details[errDetail].message}));
        return res.status(httpStatus.status.BAD_REQUEST).json({
            errors
        });
    }

    next(error);
}