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
    // view: {
    //     required:true,
    //     type: Number
    // },
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