const express = require("express")
const Router = express.Router()
const SucessController=require("../Controllers/Success")
Router.get("/Sucess",SucessController.SucessMsg )
module.exports=Router

