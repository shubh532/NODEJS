const express = require("express")
const path= require("path")
const RootPath=require("../Helpers/path.js")
const Router = express.Router()

Router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(RootPath,"View","Admin.html"))
})
Router.post("/add-product", (req, res, next) => {
    res.redirect("/")
    console.log(req.body,"from ad")
})



module.exports = Router;