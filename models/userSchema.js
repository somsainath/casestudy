var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name : {type:String},
    email : { type: String,  match: /\S+@\S+\.\S+/ ,unique:true},
    mobile : {  type: mongoose.Schema.Types.Number},
    dateOfBirth : { type: Date },
    gender : { type: String },
    password : { type: String }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)


//In a call 5 min