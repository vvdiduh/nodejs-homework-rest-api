const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isvalidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(404, `${contactId} invalid id format`));
  }
  next();
};

module.exports = isvalidId;
