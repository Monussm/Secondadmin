const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs')
const port=process.env.port ||3000;
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.static(mypublic))
app.set('view engine',"hbs");
hbs.registerPartials(mypartials);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main(){
mongoose.set('strictQuery',true);
await mongoose.connect('mongodb://127.0.0.1:27017/info');
};
const contactschema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    mobileno:Number,
    emailid:String,
    yourmessage:String
  });
  const Kitten = mongoose.model('Kitten',contactschema);




// Administration schema
// const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main(){
mongoose.set('strictQuery',true);
await mongoose.connect('mongodb://127.0.0.1:27017/admin');
};
const Administrationschema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    mobileno:Number,
    emailid:String,
    yourmessage:String
  });
  const admin= mongoose.model('admin',Administrationschema);



app.get("/",(req,res)=>{
const params={}
res.render('index')
})
app.get("/log",(req,res)=>{
const params={}
res.render('log')
})

app.post('/log',async(req,res)=>{
//   const emailid=req.body.emailid
//   const mobileno=req.body.mobileno
//   const check= await Kitten.findOne({emailid})
//   console.log(check)
//   if(check.emailid===emailid){
//   if(check.mobileno==mobileno){
//   res.send("successful")
//   }
//   else{
//   res.send("not match")
//   }

//   }
//   else{

//  res.send('Mobile number match')
const admininfo = new admin(
  { 
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      mobileno:req.body.mobileno,
      emailid:req.body.emailid,
      yourmessage:req.body.yourmessage
  
  });
  admininfo.save()
  res.render('log')
//   }




  })

app.post('/',async(req,res)=>{

const silence = new Kitten(
{ 
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    mobileno:req.body.mobileno,
    emailid:req.body.emailid,
    yourmessage:req.body.yourmessage

});
silence.save()
res.render('log')


})
app.listen(port);