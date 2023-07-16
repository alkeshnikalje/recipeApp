const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const userAuth = require('../authmiddleware');
const Recipe = require('../models/recipes');
const mongoose = require('mongoose');

router.post('/', userAuth, async (req, res) => {
    const newRecipe = new Recipe({
      name : req.body.name,
      description : req.body.description,
      ingredients : req.body.ingredients,
      instructions : req.body.instructions,
      recipeImageLink : req.body.recipeImageLink,
      user_id : req.user.id
    });
    try {
        await newRecipe.save();
        return res.json({ newRecipe });
    } catch (err) {
      return res.json({ message: err.message });
    }
  });

router.get('/',userAuth,async(req,res)=>{
  try{
    const recipes = await Recipe.find({});
    return res.json({recipes});
  }
  catch(err){
    return res.json({message : err.message});
  }
})

router.get('/userRecipes',userAuth,async(req,res)=>{
    try{
        const recipes = await Recipe.find({user_id: req.user.id});
        return res.json({recipes});
    }catch(err){
        return res.json({message: err.message});
    }
});

router.put('/:recipeId',userAuth,async(req,res)=>{
  try{
      const id = req.params.recipeId;
      const recipe = await Recipe.findById(id);
      if(recipe){
        if(recipe.user_id.toString() === req.user.id){
          const updatedRecipe = await Recipe.findByIdAndUpdate(id,req.body,{new: true});
          return res.json({updatedRecipe});
        }else{
          return res.status(401).json({message: "user not authorized"});
        }
      }else{
        return res.status(404).json({message: "recipe not found"});
      }
  }
    catch(err){
    return res.json({message: err.message});
  }
})

router.patch('/:recipeId',userAuth,async(req,res)=>{
    try{
      const id = req.params.recipeId;
      const recipe = await Recipe.findById(id);
      if(recipe){
        if(recipe.user_id.toString() === req.user.id){
          const recipeToBeUpdated = req.body;
          Object.assign(recipe,recipeToBeUpdated);
          await recipe.save();
          return res.json({recipe});
        }else{
          return res.status(401).json({message: "user not authorized"});
        }
      }else{
        return res.status(404).json({message: "recipe not found"});
      }
    }
    catch(err){
      return res.json({message: err.message});
    }
})

router.delete('/:recipeId',userAuth, async(req,res)=>{
  try{
      const id = req.params.recipeId;
      const recipe = await Recipe.findById(id);
      if(recipe){
        if(recipe.user_id.toString() === req.user.id){
          await recipe.deleteOne();
          return res.json({message: "recipe deleted successfully"});
        }else{
          return res.status(401).json({message: "user not authorized"});
        }
      }else{
        return res.status(404).json({message: "recipe not found"});
      }
  }
  catch(err){
    return res.json({message : err.message});
  }
})
  
module.exports = router;