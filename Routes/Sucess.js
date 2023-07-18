const express = require("express")
const path= require("path")
const RootPath=require("../Helpers/path.js")
const Router = express.Router()

Router.get("/Sucess", (req, res, next) => {
    res.sendFile(path.join(RootPath,"View","Sucess.html"))
})
module.exports=Router

