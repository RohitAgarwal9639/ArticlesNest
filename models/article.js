const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    markdown:{
        type:String,
    }
},{timestamps:true});

const Article=mongoose.model('Article',productSchema);
module.exports=Article;