const bodyParser = require("body-parser")
const path=require("path")
const RootPath=require("./Helpers/path.js")
const express=require("express")
const AdminRoute=require("./Routes/Admin.js")
const ShopRoute=require("./Routes/Shop.js")
const ContactUs=require("./Routes/contactus.js")
const Sucess=require("./Routes/Sucess.js")
const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname)))

app.use("/Admin",AdminRoute)
app.use(ShopRoute)
app.use(ContactUs)
app.use(Sucess)

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(RootPath,"View","404.html"))
})

app.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4000');
})

