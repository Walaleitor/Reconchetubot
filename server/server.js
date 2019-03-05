require('./config/config');
const mongoose = require('mongoose')
require('./discord/discord');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const hbs = require('hbs');
require('./hbs/helpers');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//configuracion global de rutas
app.use(require('./routes/index'));

app.use(express.static(path.dirname(__dirname) + '/public'));

// Express HBS engine
hbs.registerPartials(path.dirname(__dirname) + '/views/parciales');
app.set('view engine', 'hbs');


mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

// app.listen(process.env.PORT, () => {
//     console.log('Escuchando puerto: ', process.env.PORT);
// });

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});