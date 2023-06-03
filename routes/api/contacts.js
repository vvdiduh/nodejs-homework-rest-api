const express = require('express');

const ctrl = require('../../controllers/contacts');

const router = express.Router();

router.get('/', ctrl.getContacts);

router.get('/:contactId', ctrl.findContactById);

router.post('/', ctrl.addContact);

router.put('/:contactId', ctrl.editContactById);

router.delete('/:contactId', ctrl.deleteContactById);

module.exports = router;
