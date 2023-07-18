const express=require("express")
const Routes=express.Router()


Routes.get("/",(req,res,next)=>{
    res.send("<html> <body> <h1>WelCome To Express Js</h1></body></html>")
  })
  

  module.exports=Routes;