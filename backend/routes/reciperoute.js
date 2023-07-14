const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const userAuth = require('../authmiddleware');
const Recipe = require('../models/recipes');

router.post('/', userAuth, async (req, res) => {
    const newRecipe = new Recipe(req.body);
    try {
      const user = await User.findById(req.user.id);
      user.recipes.push(newRecipe._id);
      await user.save();
  
      await newRecipe.save();
  
      return res.json({ newRecipe });
    } catch (err) {
      return res.json({ message: err.message });
    }
  });

router.get('/',userAuth,async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).populate('recipes');
        if(user.recipes.length === 0){
            return res.json({message : "you have not added any recipes. please add a few"});
        }
        return res.json({recipes : user.recipes});
    }catch(err){
        return res.json({message: err.message});
    }
});

router.put('/:recipeId',userAuth,async(req,res)=>{
  try{
    const id = req.params.recipeId;
    const user = await User.findById(req.user.id);
    if(user.recipes.includes(id)){
      const recipeToBeUpdated = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
      await recipeToBeUpdated.save();
      return res.json({recipeToBeUpdated});
    }else{
      return res.status(404).json({message: "recipe not found"});
    }
  }catch(err){
    return res.json({message: err.message});
  }
})

router.patch('/:recipeId',userAuth,async(req,res)=>{
    try{
      const id = req.params.recipeId;
      const user = await User.findById(req.user.id);
      if(user.recipes.includes(id)){
        const recipeToBeUpdated = await Recipe.findById(id);
        Object.assign(recipeToBeUpdated,req.body);
        await recipeToBeUpdated.save();
        return res.json({recipeToBeUpdated});
      }else{
        return res.status(404).json({message: "recipe not found"})
      }
    }
    catch(err){
      return res.json({message: err.message});
    }
})
  
module.exports = router;