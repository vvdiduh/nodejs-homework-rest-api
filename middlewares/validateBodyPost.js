const { HttpError } = require('../helpers');

const validateBodyPost = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      const keyError = error.details[0].context.key;
      next(HttpError(400, `missing required ${keyError} field`));
    }
    next();
  };
  return func;
};

module.exports = validateBodyPost;
//     const keyError = error.details[0].context.key;
//     const { value } = schema.validate(req.body);

//     switch (error) {
//       case !Object.keys(value).length:
//         next(HttpError(400, 'missing fields'));
//         break;
//       case error:
//         next(HttpError(400, `missing required ${keyError} field`));
//         break;

//     }
//     next();
//   };
//   return func;
// };

// module.exports = validateBody;
