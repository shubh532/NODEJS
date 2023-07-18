const bodyParser = require("body-parser")
const express=require("express")
const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use("/add-product",(req, res, next)=>{
  res.send("<html><body><form action=/product method='POST'><input type='text' name='Name'/><input type='number' name='Size'/><button  type='submit'>Submit</button></form></body></html>")
})

app.use("/product",(req,res,next)=>{
  res.redirect("/")
  console.log(req.body)
})

app.use("/",(req,res,next)=>{
  res.send("<html> <body> <h1>WelCome To Express Js</h1></body></html>")
})

app.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4000');
})

