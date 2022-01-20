const mongoose = require('mongoose');
const User = require('./User');
const {Schema} = mongoose;



    const ingreSchema = new Schema({ /* accesde a los parametros de la funcion schema */
        dinero: { type: Number, required: true },
        description: { type: String, required: true },
        valor:{type: String, required: true},
        date: { type: Date, default: Date.now},
        userId:{type: Schema.Types.ObjectId, ref: User},
        userEmail:{type: String, required: true}
    });

module.exports = mongoose.model('Ingreso', ingreSchema);
