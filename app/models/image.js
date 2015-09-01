// app/models/image.js
// get mongoose module
var mongoose = require('mongoose');

// define our image model
module.exports = mongoose.model('Image', {
    //_id : { type : String },
    title : { type : String },
    url : { type : String },
    date : { type : String }
});