require('./config/config');
require('./hbs/helpers');
const mongoose = require('mongoose')
require('./discord/discord');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const flash = require('express-flash-notification');
var methodOverride = require('method-override')

const app = express();

//Middleware que parsea el metodo en html(hbs)
app.use(methodOverride('_method'))

//Seguridad de la sesion de cookies
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 's3Cur3',
    name: 'sessionId',
}));

//Flash message notification
app.use(flash(app));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//configuracion global de rutas
app.use(require('./routes/index'));

//express assets
app.use(express.static(path.dirname(__dirname) + '/public'));

// Express HBS engine
hbs.registerPartials(path.dirname(__dirname) + '/views/parciales');
app.set('view engine', 'hbs');


//conexion a la base de datos
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