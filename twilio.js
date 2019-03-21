
const account = process.env.ACCOUNT_SID
const auth = process.env.AUTH_TOKEN

const twilio = require('twilio');

const client = new twilio(account, auth);

const SMS = client.messages;


const dispatchSMS = (to, body) => {
    return SMS.create({
        to,
        body, 
        from: '19706484402'
    })
}

exports.dispatchSMS = dispatchSMS;


