var messages = require('./messages_pb');

// the message is preconfigured to be able to serialize
var customer = new messages.Customer()

customer.setUsername('ivorscott');
customer.getEmailAddressesList().push('ivor@devpie.io');

console.log(customer)
console.log(customer.toObject())