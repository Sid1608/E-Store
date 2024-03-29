//in api keys section we have 
//publishable key: used on client side
//secret key:on server side
const router=require('express').Router();
const stripe=require('stripe')(process.env.STRIPE_KEY);


router.post("/payment",(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd"
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            console.log(stripeErr)
            res.status(500).json(stripeErr);
            
        }else{
            res.status(200).json(stripeRes);
        }
    })
})

module.exports=router;