var express=require('express');
const router = require('./users')
const router1=require('./download');
const bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
app.use('/users',router)
app.use('/download',router1);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/app.html');
}); 
var server=app.listen(3000,function(){
    console.log("Server is up");
});