const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    user:{
        type:String
    },
    password:{
        type:String
    },
    token:{
        type:String
    },
    role:{
        type:Number
    }
});

module.exports = mongoose.model('User', User);