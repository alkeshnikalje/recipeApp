const mongoose = require('mongoose');
const User = require('../models/users');

const recipeSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    name : {type : String, required: true},
    description : {type: String},
    ingredients : [{type : String, required: true}],
    instructions : {type: String, required: true},
    recipeImageLink : {type: String}
})

const Recipe = mongoose.model('recipes',recipeSchema);

module.exports = Recipe;