const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add a hero name!']
    }, 
    role:{
        type:String,
        required:[true, 'Please add the hero role']
    }, 
    img:{
        type:String, 
        required:[true, 'Please add the hero image']
    }, 
    quote:{
        type:String,
        required:[true, 'Please add the famous quote of the hero']
    }
}, 
{
    timestamps:true
})


module.exports = mongoose.model('Hero', heroSchema)