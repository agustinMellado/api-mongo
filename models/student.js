const { stringify } = require('nodemon/lib/utils');
const mongoose = require('../config/db');


const StudentSchema = new mongoose.Schema({
    userName:{type:String, require:true, max:20},
    userLastName:{type:String, require:true, max:20},
    userEmail:{type:String, requiere:true, max:100},
    userDni:{type:Number, requiere:true},
    userAge:{type:Number,requiere:true}
})
const estudiantes= mongoose.model( 'estudiantes', StudentSchema)

export default usuarios
