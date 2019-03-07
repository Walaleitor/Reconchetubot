const express = require('express');
const app = express();

app.use(require('./api/insulto'))


//backend
app.use(require('./hbs/webpage'))
app.use(require('./hbs/insulto'))

module.exports = app;