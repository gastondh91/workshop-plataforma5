require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./src/routes')(app);

app.listen(PORT, ()=> console.log(`App it's running 🙌\n\nPORT:${PORT}\n\nYou can Open from: http://localhost:${PORT}`));
