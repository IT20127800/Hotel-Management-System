const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    nation:{
        type:String,
        required:true 
    }
  
});

module.exports = mongoose.model('customer', customerSchema)