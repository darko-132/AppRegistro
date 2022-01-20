const router = require('express').Router()
router.get('/home', (req, res)=>{
    res.render('main.hbs')
})


module.exports = router;