const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getContacts);

router.get('/:contactId', ctrl.findContactById);

router.post('/', validateBody(schemas), ctrl.addContact);

router.put('/:contactId', validateBody(schemas), ctrl.editContactById);

router.delete('/:contactId', ctrl.deleteContactById);

module.exports = router;
