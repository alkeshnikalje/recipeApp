const mongoose = require('mongoose');
const Recipe = require("./recipes");

const userSchema = new mongoose.Schema({
    username : {type : String,required : true, unique: true},
    password : {type : String, required: true},
    recipes : [{ type: mongoose.Schema.Types.ObjectId, ref: 'recipes' }]
})

const User = mongoose.model('users',userSchema);

module.exports = User;