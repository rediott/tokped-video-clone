const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
    title: {
        required:true,
        type: String
    },
    creator: {
        required:true,
        type: String
    },
    thumbnail:{
        require:true,
        type: String
    },
    video:{
        require:true,
        type: String
    }

});



module.exports = mongoose.model("video",videoSchema,'video') 