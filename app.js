const express=require('express');
const dotenv = require('dotenv');
const jwt=require('jsonwebtoken');
const port=3000;

const app=express();
const bookRouter=require('./routes/book.js');
const userRouter=require('./routes/user.js');
const loginRouter=require('./routes/login.js');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
dotenv.config();

//suojaamattomat reitit
app.use('/login',loginRouter);
app.use('/book',bookRouter);

app.use(authenticateToken);
//suojatut reitit
app.use('/user',userRouter);


app.listen(port, function(){
    console.log("Express esimerkki portissa "+port);
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = "+token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, function(err, user) {
  
      if (err) return res.sendStatus(403)

      req.user = user
  
      next()
    })
  }

module.exports=app;