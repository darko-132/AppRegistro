const router = require('express').Router();

router.get('/calculadora', (req, res)=>{
    res.render('ingreso/calculadora.hbs')
})

module.exports = router;