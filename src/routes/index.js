const router = require('express').Router()
router.get('/home', (req, res)=>{
    res.render('layouts/main.hbs')
})


module.exports = router;