const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        required:true,
        type: String
    },
    comment:{
        require:true,
        type: String
    }

});

module.exports = mongoose.model("comment",commentSchema,'comment')