import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type:String},
    body: {type:String},
    author: {type:String},
},{timestamps:true})

const Post = mongoose.model("post", postSchema);

export default Post;