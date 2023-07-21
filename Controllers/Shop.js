const path=require("path")
const RootPath=require("../Helpers/path.js")

exports.getShopProduct=(req,res,next)=>{
    res.sendFile(path.join(RootPath,"View","Shop.html"))
  }