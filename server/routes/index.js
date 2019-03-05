const express = require('express');
const app = express();

app.use(require('./api/insulto'))
app.use(require('./hbs/webpage'))


module.exports = app;