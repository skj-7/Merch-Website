const express = require("express");
const fs=require("fs")
const path=require("path")
const app = express();
const port = 27017;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/static",express.static('static')) ;
// app.use(express.urlencoded())
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/merch', {useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Working Properly')
});
var mySchema = new mongoose.Schema({
  name: String,
  number:Number,
  reg:String
});
var mySchema1 = new mongoose.Schema({
  name: String,
  email:String,
  subject:String,
  message:String
});
var mySchema2 = new mongoose.Schema({
  info:String,
  name: String,
  number:Number,
  hostel:String,
  room:String,
  size:String,
  color:String,
  payno:Number
});
var userdata = mongoose.model('registration', mySchema);
var userdata1 = mongoose.model('contact', mySchema1);
var userdata2 = mongoose.model('order', mySchema2);
app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
})
app.get('/about', (req, res)=>{
    res.status(200).render('about.pug');
})
app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
})
app.get('/register', (req, res)=>{
    res.status(200).render('register.pug');
})
app.get('/home/avishkar', (req, res)=>{
    res.status(200).render('avishkar.pug');
})
app.get('/home/culrav', (req, res)=>{
    res.status(200).render('culrav.pug');
})
app.get('/home/mnnit', (req, res)=>{
    res.status(200).render('mnnit.pug');
})
app.get('/home/ecell', (req, res)=>{
    res.status(200).render('ecell.pug');
})
app.get('/home/prosang', (req, res)=>{
    res.status(200).render('prosang.pug');
})
app.get('/home/avishkar/buynow', (req, res)=>{
    let obj={info:"Avishkar T"};
    res.status(200).render('buynow.pug',obj);
})
app.get('/home/culrav/buynow', (req, res)=>{
    let obj={info:"Culrav T"};
    res.status(200).render('buynow.pug',obj);
})

app.get('/home/mnnit/buynow', (req, res)=>{
    let obj={info:"Mnnit T"};
    res.status(200).render('buynow.pug',obj);
})
app.get('/home/ecell/buynow', (req, res)=>{
    let obj={info:"Ecell T"};
    res.status(200).render('buynow.pug',obj);
})
app.get('/home/prosang/buynow', (req, res)=>{
    let obj={info:"Prosang T"};
    res.status(200).render('buynow.pug',obj);
})
app.post('/register',(req,res)=>{
    data=req.body
    var mydata=new userdata(data);
    mydata.save(function (err,ok){
        if(err)
        return console.error(err)
    }) 
    res.status(200).render('home.pug')
})
app.post('/contact',(req,res)=>{
    data=req.body
    var mydata=new userdata1(data);
    mydata.save(function (err,ok){
        if(err)
        return console.error(err)
    }) 
    res.status(200).render('contact.pug')
})
app.post('/buynow',(req,res)=>{
    data=req.body
    var mydata=new userdata2(data);
    mydata.save(function (err,ok){
        if(err)
        return console.error(err)
    }) 
    res.status(200).render('done.pug')
    
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

