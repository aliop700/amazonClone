var express=require('express'); 
var mongoose=require('mongoose'); 
var bodyParser=require('body-parser');
var User=require('./models/schema.js');
var app=express(); 
mongoose.connect('mongodb://root:abc123@ds137191.mlab.com:37191/ecommerce',function(err){
   if(err) console.log(err);
    else console.log('connected succesfully to the database');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));

app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){
   res.json("am ali"); 
});
app.post('/create-user',function(req,res,next){
   var user=new User(); 
    user.profile.name=req.body.name
    user.password=req.body.password;
    user.email=req.body.email;
    
    user.save(function(err){
       if(err) return next(err);  
        else 
            res.json('user added succesfully');
    });
});

app.listen(3000,function(err){
    if(err) throw err; 
    console.log("The server is running on port "+app.get('port'));
});
