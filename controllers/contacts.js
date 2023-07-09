const Contact = require('../models/contact');

const { HttpError, ctrlWrapper } = require('../helpers');

const getContacts = async (req, res, next) => {
  const result = await Contact.find({}, 'name email phone favorite');
  res.json(result);
};

const findContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const editContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  console.log(result);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({
    message: 'contact deleted',
  });
};

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  findContactById: ctrlWrapper(findContactById),
  addContact: ctrlWrapper(addContact),
  editContactById: ctrlWrapper(editContactById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteContactById: ctrlWrapper(deleteContactById),
};
