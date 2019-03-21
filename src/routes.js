const methods = require('./methods');

module.exports = (app) => {

    app.post('/get-order-status', methods.getOrder);

    app.post('/send/sms', methods.sendSMS);

    app.post('/send/email', methods.sendEmail);

}
