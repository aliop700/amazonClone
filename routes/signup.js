var router=require('express').Router();
var User=require('../models/schema');
router.get('/signup',function(req,res){
   res.render('signup.ejs',{title:"Sign up",errors:req.flash('errors')}); 
});

router.post('/signup',function(req,res,next){
    var user=new User();
    user.email=req.body.email;
    user.password=req.body.password;
    user.profile.name=req.body.profile;
     
    User.findOne({email:req.body.email},function(err,exist){
        if(err) return next(err);
        if(exist){
            console.log('user exists');
            req.flash('errors','this email address already exists');
                            res.redirect('/signup');

        }else {
            user.save(function(err,user){
                if(err) return next(err); 
                res.redirect('/');
            });
        }
    });
});

module.exports=router;