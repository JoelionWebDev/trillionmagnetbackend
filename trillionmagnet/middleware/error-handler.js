const { CustomApiError } = require("../errors/errors-CustomApi");
const errHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({
      msg: "check out very well something is wrong, you may likely be entering a wrong data",
    });
};
module.exports = errHandler;
