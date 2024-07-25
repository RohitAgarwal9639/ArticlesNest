const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//Routes
const ArticleRoutes=require('./routes/article');
app.use(ArticleRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/articlesdb')
.then(()=>console.log('Db Connected'))
.catch(()=>console.log('error'));

app.listen(4000,()=>{
    console.log('Server is connected at 3000');
});