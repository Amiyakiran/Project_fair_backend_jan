//only file that runs in the backend.
//1) dontenv
require('dotenv').config()//environment variable will be added to process.env file.

//2) import express
const express = require('express')

//3) import cors
const cors = require('cors')
//import router
const router = require('./router')
//import mongodb
require('./db/connection')

//import app middleware
/* const appMiddleware = require('./middleware/appMiddleware') */

//create server
const projectFairServer = express()

//use cors to connect with frontend
projectFairServer.use(cors())

//json() - middleware - to convert json formate
projectFairServer.use(express.json())
//use middleware
/* projectFairServer.use(appMiddleware)
 *///server use router
projectFairServer.use(router)
//first - by which name the folder have to be called
//sec - export this folder
projectFairServer.use('/uploads',express.static('./uploads'))



//port 
const PORT = 3000 || process.env.PORT


//run the server
projectFairServer.listen(PORT,()=>{
    console.log(`project fair server running successfully at port number : ${PORT}`);
})

//get

projectFairServer.get('/',(req,res)=>{
    res.send('get request recieved')
})

/* 
projectFairServer.post('/',(req,res)=>{
   res.send('post request received')
})

projectFairServer.put('/',(req,res)=>{
    res.send('put request recievd')
}) */