const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { value } = schema.validate(req.body);
    const { error } = schema.validate(req.body);

    if (!Object.keys(value).length) {
      next(HttpError(400, 'missing fields'));
    } else if (error) {
      const keyError = error.details[0].context.key;
      next(HttpError(400, `missing required ${keyError} field`));
    } else {
      next();
    }
  };
  return func;
};

module.exports = validateBody;
