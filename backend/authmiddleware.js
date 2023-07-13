const jwt = require('jsonwebtoken');

const userAuth = (req,res,next)=>{
    try{
        const authHeader = req.headers.authorization;
        if(authHeader){
            const token = authHeader.split(' ')[1];
            jwt.verify(token,process.env.SECRET,(err,user)=>{
                if(err){
                    return res.sendStatus(403);
                }
                req.user = user;
                next();
            });
        }else{
            res.sendStatus(401);
        }
    }catch(err){
        return res.json({message : err.message});
    }
}

module.exports = userAuth;