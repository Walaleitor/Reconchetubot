const express = require('express');
const app = express();

app.use(require('./insulto'))


module.exports = app;