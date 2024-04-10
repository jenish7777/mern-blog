import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

mongoose.connect("mongodb+srv://jenishsangani54:abcd@mern-blog.lvaogjb.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog").then(
    ()=>{
        console.log("Database is Connected")
    }
).catch((err)=>{
    console.log(err)
})

const app=express();

app.listen(3000,() =>{
    console.log("Server is running on port 3000!!")
});