const express=require("express")
const path=require("path")
const Routes=express.Router()
const RootPath=require("../Helpers/path.js")


Routes.get("/",(req,res,next)=>{
    res.sendFile(path.join(RootPath,"View","Shop.html"))
  })
  

  module.exports=Routes;