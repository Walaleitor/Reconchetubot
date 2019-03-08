const express = require('express');
const Insulto = require('../../model/insulto')
const router = express.Router();

router.get('/insultos', (req, res) => {

    Insulto.find({})
        .exec((err, insultos) => {

            content = {
                insultos,
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

        //redirige y manda una notificacion
        req.flash('info', 'Creado con exito', '/insultos');




    });
});

router.delete('/insultos/:id', (req, res) => {
    let id = req.params.id;
    Insulto.findByIdAndDelete(id, (err, res) => {
        if (err) {
            return res.redirect('/insultos');
        }
        req.flash('info', 'Eliminado con exito', '/insultos')
    })
})




module.exports = router