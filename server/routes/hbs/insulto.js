const express = require('express');
const Insulto = require('../../model/insulto')
const router = express.Router();

router.get('/insulto', (req, res) => {

    Insulto.find({}, (err, insultos) => {
        content = {
            insultos
        }
        res.render('insulto/index', content);
    });

});

router.get('/insulto/new', (req, res) => {
    res.render('insulto/new');
});




module.exports = router