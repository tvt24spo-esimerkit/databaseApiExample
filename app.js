const express=require('express');
const port=3000;

const app=express();
const bookRouter=require('./routes/book.js');
const userRouter=require('./routes/user.js');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/book',bookRouter);
app.use('/user',userRouter);

app.listen(port, function(){
    console.log("Express esimerkki portissa "+port);
});



module.exports=app;