const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const keyError = error.details[0].context.key;
    if (error) {
      next(HttpError(400, `missing required ${keyError} field`));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
