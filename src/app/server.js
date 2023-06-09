const express = require("express");
var mysql = require('mysql');
const bcrypt=require('bcryptjs');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'hashcode'
  });

var cors =require('cors') 
   
app=express()
app.use(express.json())
app.use(cors())
connection.connect();

app.post('/insert',function(req,res){
    const {username,passwords}=req.body;
   const hashcode= bcrypt.genSaltSync(5)
   connection.query('insert into hashpwd (username,passwords) values (?,?)',[username,bcrypt.hashSync(passwords,hashcode)],function(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    res.json(results)
})
})

app.post('/compare',(req,res)=>{
    const {username,passwords}=req.body;

    connection.query('select * from hashpwd where username=?',[username],function(error,usernameresults){
        if(error){
            console.log(error);
        }
        else{
            console.log(usernameresults);
        }
    
    if(usernameresults.length==0){
        res.json({message:"login failed"});
    }
    const hashpassword=usernameresults[0].passwords;

    bcrypt.compare(passwords,hashpassword,function(err,passwordresults){
        if(passwordresults){
        console.log(usernameresults);
        res.json(usernameresults);
        }
        else{
            res.json({message:"invalid username or password"});
        }
    })
})
})

app.listen(3000,()=>{
    console.log("listening port 3000");
})