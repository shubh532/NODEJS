const path = require("path")
const RootPath = require("../Helpers/path.js")

exports.SucessMsg = (req, res, next) => {
    res.sendFile(path.join(RootPath, "View", "Sucess.html"))
}