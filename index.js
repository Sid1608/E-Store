const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./router/user")
const authRoute = require("./router/auth")
const productRoute=require("./router/product")
const cartRoute=require("./router/cart")
const orderRoute = require("./router/order")
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
    .then(()=>console.log("mongodb connected"))
    .catch(err=>console.log(err));

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);


app.listen(process.env.PORT||8080,()=>{
    console.log(`server running on port 8080`)
})