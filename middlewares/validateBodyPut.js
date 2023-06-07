const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { value } = schema.validate(req.body);  
    if (!Object.keys(value).length) {
      next(HttpError(400, 'missing fields'));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
