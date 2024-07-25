const express=require('express');
const Article = require('../models/article');
const router=express.Router();
const article=require('../models/article')


router.get('/',async (req,res)=>{
    res.send('PLz move to articles route');
});
router.get('/articles',async (req,res)=>{
    const articles= await article.find();
    // console.log(articles);
    res.render('index',{articles});
});

router.get('/articles/new',(req,res)=>{
    res.render('new');
})
router.post('/articles',async (req,res)=>{
    // res.send(req.body);
    const {title,desc,markdown}=req.body;
    await article.create({title,desc,markdown});
    res.redirect('/articles');
});

//here


router.get('/articles/:id',async (req,res)=>{
    const {id}=req.params;
    const article=await Article.findById(id);
    res.render('show',{article});
})
// Render the edit form
router.get('/articles/:id/edit',async(req,res)=>{
    const {id}=req.params;
    const articles=await Article.findById(id);
    res.render('edit',{articles});
})

router.patch('/articles/:id',async(req,res)=>{
    const {id}=req.params;
    const {title,desc,markdown}=req.body;
    await Article.findByIdAndUpdate(id,{title,desc,markdown});
    res.redirect(`/articles/${id}`);
})

router.delete('/articles/:id',async(req,res)=>{
    const {id}=req.params;
    const articles=await Article.findByIdAndDelete(id);
    res.redirect('/articles');
});

module.exports=router;