var express=require('express'); 
var mongoose=require('mongoose'); 
var app=express(); 
app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){
   res.json("am ali"); 
});

app.listen(3000,function(err){
    if(err) throw err; 
    console.log("The server is running on port "+app.get('port'));
})
