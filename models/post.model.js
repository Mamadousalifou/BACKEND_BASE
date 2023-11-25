import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    message :{
        type:String,
        required : true,
    },
    author :{
        type: String,
        required:true
    },
    likers :{
        type :[String]
    }
},{
    timestamps:true
})

export const Post = mongoose.model('Post',postSchema);