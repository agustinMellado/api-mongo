const { stringify } = require('nodemon/lib/utils');
const mongoose = require('../config/db');


const UserSchema = new mongoose.Schema({
    userName:{type:String, require:true, max:20},
    userEmail:{type:String, requiere:true, max:100},
    password:{type:String, requiere:true}
})
const usuarios= mongoose.model( 'usuarios', UserSchema)

export default usuarios
