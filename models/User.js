const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },

});
const UserModel =  mongoose.model('user',UserSchema);
module.exports = UserModel;