const router = require('express').Router()
router.get('/', (req, res)=>{
    res.render('main.hbs')
})


module.exports = router;