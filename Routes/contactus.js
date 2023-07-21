const express = require("express")
const ContactUsControllers=require("../Controllers/ContactsUs")
const Router = express.Router()

Router.get("/contactus",ContactUsControllers.getContactUs)
Router.post("/contactus",ContactUsControllers.PostContactUs)



module.exports = Router;