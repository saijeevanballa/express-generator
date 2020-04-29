import { APIError } from "./custom-error";

export const authenticate = function (req, res, next) {
    try {
        // authication goes Here
        console.log("API: ", new Date());
        return next();
    } catch (err) {
        return next(new APIError('Unauthorized'));
    };
};
