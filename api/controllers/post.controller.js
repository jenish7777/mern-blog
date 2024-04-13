import { errorHandler } from "../utils/error.js"
import  Post  from "../models/post.model.js"

export const create =async (req,res,next)=>{
    if(!req.user.isAdmin){
        return next(errorHandler(403,"You are not allowed to Create a post"))
    }
    if(!req.body.title || !req.body.content ){
        return next(errorHandler(400,"All fields are required"))
    }

    const slug=req.body.title.split(" ").join("_").toLowerCase().replace(/[^a-zA-Z0-9-]/g,"_");

    const newPost= new Post({
        ...req.body,
        slug,
        userId:req.user.id
    });
    try{
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        next(err);
    }

}
