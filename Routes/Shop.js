const express = require("express")
const Routes = express.Router()

const ShopProductControllers = require("../Controllers/Shop")



Routes.get("/", ShopProductControllers.getShopProduct)


module.exports = Routes;