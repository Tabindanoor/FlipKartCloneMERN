import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        max:20,
        min:5,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        max:20,
        min:5,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        max:20,
        min:5,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        max:20,
        min:5,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
    }

},{timestamps:true})


const Usermodel = new mongoose.model("UserModel",userSchema);
export default Usermodel;