require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const twilio = require('./twilio');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes')(app)

let PromiseTo = [];
let numbers = ['1167610465', '1159441529', '1132066451']
numbers.map(e => PromiseTo.push(twilio.dispatchSMS(`+549${e}`, 'Hola from twilio')))

// Promise.all(PromiseTo).then((resp) => {
//     console.log('====================================');
//     console.log(resp);
//     console.log('====================================');
// }).catch(err => console.log(err))

app.listen(PORT, ()=> {
    console.log(`app it's running on port: ${PORT}`);
})