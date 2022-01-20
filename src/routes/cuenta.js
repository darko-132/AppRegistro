const router = require('express').Router();
const Ingreso = require('../models/Ingreso');
const {isAuthenticated} = require('../helper/auth');

router.get('/ingreso', isAuthenticated, (req, res)=>{
    res.render('ingreso/ingreso.hbs')
});

router.post('/ingreso/dinero' , async function(req, res){
    const {dinero, description} = req.body;
    const errors = [];
    if(!dinero | dinero == 0){
      errors.push({text: 'Por favor inserte una cantidad'})
    }
        if(!description){
      errors.push({text: 'Por favor inserte una descripcion'})
  }
  if(errors.length > 0){
      res.render('ingreso/ingreso.hbs', {
          errors,
          dinero,
          description
      });

  }else{
      if(dinero > 0){
          const valor= 'Ingreso';
          const userId = res.locals.user._id
          const userEmail = res.locals.user.email
          const newIngreso = new Ingreso({ dinero, description, valor, userId, userEmail});
          await newIngreso.save();
          res.redirect('/') 
      }
      if(dinero < 0){
          const valor= 'Egreso';
          const userId = res.locals.user._id
          const userEmail = res.locals.user.email
          const newIngreso = new Ingreso({ dinero, description, valor, userId, userEmail});
          console.log(res.locals.user)
          await newIngreso.save();
          res.redirect('/') 
      }

    
  }

});
router.get('/', isAuthenticated, async (req, res)=>{
    try{
        /* const userId = res.locals.user.email */
        const UserId = res.locals.user._id;
        const allIngreso = await Ingreso.find({userId: UserId}).sort({date: 'desc'}).lean();
        const newArray = allIngreso.map(item => parseInt(item.dinero));
        const total = newArray.reduce((a, b) => a + b, 0);
        const anterior = total-parseInt(allIngreso[0].dinero)
        res.render('ingreso/todos.hbs', {allIngreso, total, anterior})
        }
        catch  {
            res.render('ingreso/ingreso')
        }
});
router.get('/dinero/actualizar/:id', isAuthenticated, async(req, res)=>{
    const ingreso = await Ingreso.findById(req.params.id).lean();
    res.render('ingreso/Edit-cuenta', {ingreso})
})

router.put('/dinero/actualizar-dinero/:id', async(req, res)=>{
    const {dinero, description} = req.body;
    await Ingreso.findByIdAndUpdate(req.params.id, {dinero, description});
    res.redirect('/')
})

router.get('/dinero/delete/:id', isAuthenticated, async(req, res)=>{
await Ingreso.findByIdAndDelete(req.params.id);
res.redirect('/')
});
    


module.exports = router;