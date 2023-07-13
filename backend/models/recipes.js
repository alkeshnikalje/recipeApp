const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name : {type : String, required: true},
    description : {type: String},
    ingredients : [{type : String, required: true}],
    instructions : {type: String, required: true},
    recipeImageLink : {type: String}
})

const Recipe = mongoose.model('recipes',recipeSchema);

module.exports = Recipe;