const express = require('express');
const Insulto = require('../../model/insulto')
const router = express.Router();

router.get('/insultos', (req, res) => {

    Insulto.find({}, (err, insultos) => {
        content = {
            insultos
        }
        res.render('insulto/index', content);
    });

});

router.post('/insultos', (req, res) => {

    let body = req.body;
    let insulto = new Insulto({ contenido: body.contenido })
    insulto.save((err, insultoDB) => {
        if (err) {
            // return res.status(500).json({
            //     ok: false,
            //     err
            // })
            return res.redirect('/insultos');
        }

        res.redirect('/insultos');


    });
});




module.exports = router