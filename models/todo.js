const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoname:{
        type : String,
        required: true,
        trim: true
    },
    done:{
        type: Boolean,
        default: false
    },
    
},{timestamps: true});

module.exports = mongoose.model('Todo',todoSchema);