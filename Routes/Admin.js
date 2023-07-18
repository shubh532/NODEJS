const express = require("express")
const Router = express.Router()

Router.get("/add-product", (req, res, next) => {
    res.send("<html><body><form action=/Admin/add-product method='POST'><input type='text' name='Name'/><input type='number' name='Size'/><button  type='submit'>Submit</button></form></body></html>")
})
Router.post("/add-product", (req, res, next) => {
    res.redirect("/")
    console.log(req.body)
})



module.exports = Router;