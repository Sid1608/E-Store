const router=require('express').Router();
const User=require("../models/User");
const CryptoJs=require('crypto-js');
const jwt=require("jsonwebtoken");
//REGISTER
router.post("/register",async(req,res)=>{
    
    try{
        //when we save any documents or update or delete it takes couple of millesecond or seconds,
        const newUser=new User({
            username: req.body.username,
            email:req.body.email,
            password: CryptoJs.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
              ).toString(),
        });
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }

})

//LOGIN
router.post("/login",async(req,res)=>{
    try {
        console.log("here",req.body,"kk")
        const user=await User.findOne({username: req.body.username})
        !user && res.status(401).json('wrong credentials!')
        const hashedPassword=CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
          )
        const OrignalPassword=hashedPassword.toString(CryptoJs.enc.Utf8);
        console.log("here")
        OrignalPassword!==req.body.password && res.status(401).json("wrong credentials ")
        const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin,
        },process.env.JWT_SEC,{expiresIn:"3d"})
        const {password, ...others}=user._doc;
        // res.status(200).json({others,accessToken})
        res.status(200).json({...others,accessToken})
            
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports=router;