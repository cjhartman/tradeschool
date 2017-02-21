var mongoose = require('mongoose');

var schema= new mongoose.Schema({
    date_added:{type:Date, default: Date.now},
    title: {type: String, required: true},
    price: {type:Number, required:true,default: 0},
    img_src: {type:String},
    description: {type:String},
    seller:{type:String,required:true},
    tags:[String],
    forsale: {type: Boolean, default: true}
});

module.exports = mongoose.model('Product',schema);