import { Schema,model } from "mongoose";
import validator from "validator";


const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"its not a valid e mail"]
    },
    password:{
        type:String,
        required:true, 
    },
},{timestamps:true})
const UserModel=new model('user',userSchema)
export default UserModel  