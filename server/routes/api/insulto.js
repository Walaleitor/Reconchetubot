const express = require('express');
const Insulto = require('../../model/insulto')
const app = express();


app.post('/insulto', (req, res) => {
    let body = req.body;


    let insulto = new Insulto({
        contenido: body.contenido
    })

    insulto.save((err, insultoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            insulto: insultoDB
        })


    });

});


module.exports = app