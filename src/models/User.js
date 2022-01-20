const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt= require('bcryptjs');

const usersSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    date:{ type: Date, default: Date.now},
});

usersSchema.method('encryptPassword', async (password)=>{
    const salt = await bcrypt.genSalt(10);
    const hash =bcrypt.hash(password, salt);
    return hash
});
usersSchema.method('matchPassword', async function(password){
    return await bcrypt.compare(password, this.password);
});

module.exports = mongoose.model('Users', usersSchema);