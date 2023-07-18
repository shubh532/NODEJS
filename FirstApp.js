const bodyParser = require("body-parser")
const express=require("express")
const AdminRoute=require("./Routes/Admin.js")
const ShopRoute=require("./Routes/Shop.js")
const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use("/Admin",AdminRoute)
app.use(ShopRoute)
app.use((req,res,next)=>{
  res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4000');
})

