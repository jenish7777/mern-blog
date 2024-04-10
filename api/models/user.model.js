import { Mongoose } from "mongoose";
import { required } from "nodemon/lib/config";

const userSchema= new Mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        }
    }, {timestamps:true}
);

const User=Mongoose.model("User",userSchema);

export default User;