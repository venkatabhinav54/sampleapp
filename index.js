const express=require('express');
const path=require('path');

const app=express();

app.use(express.json());



app.get("/hi",function(req,res){
    res.status(200).json({
        message:"Hi welcome to sample express app"
    });
})


app.get("/login",function(req,res){
    const filePath=path.join(__dirname,'/login.html');
    res.sendFile(filePath);
});


app.get("/",function(req,res){
    res.send("Hi");
})

app.get("*",function(req,res){
    res.send("<h2>No Path found</h2> ");
})
app.listen(4000,function(){
    console.log("App running on Port 4000");
})


