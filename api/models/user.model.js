import  Mongoose from "mongoose";

const userSchema= new Mongoose.Schema({
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
        },
        profilePicture:{
            type:String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&s"
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
    }, {timestamps:true}
);

const User=Mongoose.model("User",userSchema);

export default User;