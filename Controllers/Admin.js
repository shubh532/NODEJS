const path = require("path")
const RootPath = require("../Helpers/path.js")

exports.getAddProducts = (req, res, next) => {
    res.sendFile(path.join(RootPath, "View", "Admin.html"))
}

exports.PostProducts = (req, res, next) => {
    res.redirect("/")
    console.log(req.body, "from ad")
}