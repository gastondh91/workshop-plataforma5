
const mandrill = require('mandrill-api/mandrill');

const mandrillApp = new mandrill.Mandrill(process.env.MANDRILL_API);

module.exports = params => {
    return new Promise((resolve, reject) => mandrillApp.messages.sendTemplate(params, success => {
        return resolve("success sended")
    }, error => {
        return reject(error);
    })
)}



