const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({


  
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    title:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    groupsize:{
        type: Number,
        default: 0
    },
    Date:{
        type: Date,
        default:Date.now
    },
    image: {
        type: String // URL to the image
    }


});
const PostAdventuresModels =  mongoose.model('postadv',PostSchema);
module.exports = PostAdventuresModels;