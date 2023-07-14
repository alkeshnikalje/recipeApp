const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/userroute')
const recipeRouter = require('./routes/reciperoute');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users',userRouter);
app.use('/users/recipes',recipeRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('error',()=>{
    console.log("Error conncections");
})

db.once('open',()=>{
    console.log('connected');
})



app.listen(3000,()=>{
    console.log('server started ');
})