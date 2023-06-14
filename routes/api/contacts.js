const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBodyPost, validateBodyPut } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getContacts);

router.get('/:contactId', ctrl.findContactById);

router.post('/', validateBodyPost(schemas), ctrl.addContact);

router.put('/:contactId', validateBodyPut(schemas), ctrl.editContactById);

router.delete('/:contactId', ctrl.deleteContactById);

module.exports = router;
