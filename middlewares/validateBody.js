const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    console.log(schema.validate(req.body));
    const { error } = schema.validate(req.body);

    if (error) {
      const keyError = error.details[0].context.key;
      next(HttpError(400, `missing required ${keyError} field`));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
