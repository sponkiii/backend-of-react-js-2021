const mongoose = require('mongoose');

// creating a scema which is an object that represents the model of our user
const taskSchema = new mongoose.Schema({
    // here we define the properties we wanna have, which is also an object where we can define more properties
    
    text: {
        type: String,
        required: true,
        max: 200,
        min: 2
    },
    day:{
        type: String,
        default: Date.now
    },
    reminder:{
        type: Boolean,
    },

});


// to enable to export
module.exports = mongoose.model('Task',taskSchema);