const router=require('express').Router();
const User=require("../models/User");
const CryptoJs=require('crypto-js')
//REGISTER
router.post("/register",async(req,res)=>{
    const newUser=new User({
        username: req.body.username,
        email:req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString(),
    });
    try{
        //when we save any documents or update or delete it takes couple of millesecond or seconds,
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }

})

//LOGIN
router.post("/login",async(req,res)=>{
    try {
        const user=await User.findOne({username: req.body.username})
        !user && res.status(401).json('wrong credentials!')
        const hashedPassword=CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
          )
        const OrignalPassword=hashedPassword.toString(CryptoJs.enc.Utf8);
        OrignalPassword!==req.body.password && res.status(401).json("wrong credentials")
        const {password, ...others}=user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports=router;