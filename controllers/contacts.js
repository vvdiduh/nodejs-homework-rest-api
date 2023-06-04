const contacts = require('../models/contacts');

const { HttpError, ctrlWrapper } = require('../helpers');

const getContacts = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const findContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const addContact = async (req, res, next) => {
  const result = await contacts.addContact(req.body);
  res.json(result);
};

const editContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.updateById(contactId, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
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
  deleteContactById: ctrlWrapper(deleteContactById),
};
