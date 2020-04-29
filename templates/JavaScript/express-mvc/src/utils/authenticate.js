// authication goes Here

const authenticate = function (req, res, next) {
    try {
        console.log("API: ", new Date());
        return next();
    } catch (err) {
        return next(Error('Unauthorized'));
    };
};

module.exports = authenticate;