const { Schema, model } = require('mongoose');
const { error } = require('../schemas/contacts');
const { handleMongooseErroe } = require('../middlewares');


const contactShema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    required: [true, 'Set email for contact'],
  },
  phone: {
    type: String,
    required: [true, 'Set phone for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactShema.post("save", handleMongooseErroe)

const Contact = model('contact', contactShema);

module.exports = Contact;
