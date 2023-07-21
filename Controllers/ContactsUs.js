const RootPath=require("../Helpers/path.js")
const path= require("path")
exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(RootPath, "View", "ContactUs.html"))
}

exports.PostContactUs=(req, res, next) => {
    res.redirect("/Sucess")
    console.log(req.body,"from cont")
}