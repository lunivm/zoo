const { validationResult } = require('express-validator');

module.exports = function (req, res, next) {
  const errors = validationResult(req);

  return errors.isEmpty() ? next() : next(res.status(400).send(errors.array()));
};
