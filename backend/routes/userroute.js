const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const bcrypt = require('bcrypt');

router.post('/signup', async (req,res)=>{
    try{
        const {username,password} = req.body
        const user = await User.findOne({username});
        if(user){
            return res.status(403).json({message : "user already exists"});
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({username,password: hashedPass});
        await newUser.save();
        return res.json(newUser);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
})



module.exports = router;