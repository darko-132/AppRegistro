const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dragon:perro132.@cluster0.xziqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
/* {
    useCreateIndex: true,
    useNewUrlPerser: true,
    useFindAndModify: false
} */)
    .then(db=> console.log('DB is conect'))
    .catch(err => console.log(err));