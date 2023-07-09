const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getContacts);

router.get('/:contactId', isValidId, ctrl.findContactById);

router.post('/', validateBody(schemas.addSchema), ctrl.addContact);

router.put('/:contactId', isValidId, validateBody(schemas.addSchema), ctrl.editContactById);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.contactFavoriteSchema),
  ctrl.updateFavorite
);

router.delete('/:contactId', isValidId, ctrl.deleteContactById);

module.exports = router;
