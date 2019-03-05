const express = require('express');
const hbs = require('hbs');
const app = express();

app.get('/', (req, res) => {

    content = {
        nombre: 'Sebastian salazar',
        anio: new Date().getFullYear()
    }


    res.render('home', content);
});

app.get('/about', (req, res) => {
    content = {
        imagePath: 'assets/img/10291122_10204081250212465_5903328913042824996_nv2.jpg',
        anio: new Date().getFullYear()

    }
    res.render('about', content)
});

module.exports = app;