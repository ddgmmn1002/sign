import mongoose from "mongoose";

async function dbConnection(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/dmdb"); 
        console.log("db연결성공")
    }catch(error){
        console.log("db연결실패")
    }
}
dbConnection();
