const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const userAuth = require('../authmiddleware');

router.post('/signup', async (req,res)=>{
    try{
        const {username,password} = req.body
        if(!username || !password){
            return res.status(400).json({message : "all fields in the request body are mandatory."});
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(403).json({message : "user already exists"});
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({username,password: hashedPass});
        const token = jwt.sign({id : newUser._id},process.env.SECRET, {expiresIn : '1h'});
        await newUser.save();
        return res.json({message : 'successfully registered', token});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
})

router.post('/login', async(req,res)=>{
    try{
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({message : "all fields in the request body are mandatory."});
        }
        const user = await User.findOne({username});
        if(!user){
            return res.sendStatus(401).json({message: "invalid password or username"});
        }
        const passwordMatch = await bcrypt.compare(password,user.password);
        if(passwordMatch){
            const token = jwt.sign({id: user._id},process.env.SECRET);
            return res.json({token});
        }else{
            return res.sendStatus(401).json({message: "invalid password or username"});
        }
    }catch(err){
        return res.json({message : err.message});
    }
})




module.exports = router;