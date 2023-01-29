const express= require('express');
const mongoose=require("mongoose");
const path=require("path");
console.log('connected');
require("./conn.js");
require("./userDetails.js")
const port=process.env.PORT || 5000;
const app=express();
app.use(express.json());
const cors=require("cors");
app.use(cors());
const user=mongoose.model("POR TRACKER");
app.post("/signup",async(req,res)=>{
    const{username,password,email}=req.body;
    try{
        
        await user.create({
            username,
            password,
            email,
        });
        res.send({status:"ok"});
    }
    catch(error){
        res.send({status:"error"});
    }
});
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})