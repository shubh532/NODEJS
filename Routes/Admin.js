const express = require("express")
const Router = express.Router()

const ProductController=require("../Controllers/Admin")

Router.get("/add-product",ProductController.getAddProducts )
Router.post("/add-product",ProductController.PostProducts)



module.exports = Router;