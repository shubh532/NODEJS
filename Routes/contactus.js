const express = require("express")
const path= require("path")
const RootPath=require("../Helpers/path.js")
const Router = express.Router()

Router.get("/contactus", (req, res, next) => {
    res.sendFile(path.join(RootPath,"View","ContactUs.html"))
})
Router.post("/contactus", (req, res, next) => {
    res.redirect("/Sucess")
    console.log(req.body,"from cont")
})



module.exports = Router;