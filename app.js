const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');
require('dotenv').config();

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//Routes
const ArticleRoutes=require('./routes/article');
app.use(ArticleRoutes);
const mongoURL=process.env.DB_URL;
mongoose.connect(mongoURL)
.then(()=>console.log('Db Connected'))
.catch(()=>console.log('error'));

//comment

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server is connected at 3000');
});