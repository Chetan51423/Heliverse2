// Import the EventEmitter module
const EventEmitter = require('events');

// Increase the maximum number of listeners for the TLSSocket event emitter
EventEmitter.defaultMaxListeners = 15; // or any other number that suits your needs


const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 8001;

mongoose.connect("mongodb://127.0.0.1:27017/Helivers")
.then(()=> console.log("Mongoose connected"))
.catch((err)=>console.log("MOngo Error", err))

const userSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    first_name:{ type:String, required:true},
    Last_name:{type:String},
    email:{type:String, required:true, unique:true},
    gender:{type:String},
    avatar:{type:String},
    domain:{type:String},
    available:{type:Boolean}
    
},{timestamps:true})

const User = mongoose.model("user", userSchema)

app.use(express.urlencoded({extended:false}));




app.listen(port,()=>{console.log("Server Started at port : 8001")})