
import "dotenv/config"
import mongoose from "mongoose";

const URI = process.env.DB_URI || "mongodb://localhost:27017/ecommerce"
export default function connectToDb(){
    return mongoose.connect(URI).then(() => { 
        console.log("connected to db");
        }).catch((e) => console.log(e))
}