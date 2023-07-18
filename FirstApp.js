const http = require('http');
const express=require("express")
const app=express()

app.use((req, res, next)=>{
  res.send({Key:"value"})
  console.log("Hi Iam Middleware")
  next()
})
app.use((req, res, next)=>{
  
  console.log("Hi I am another Middleware")
})

app.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4000');
})
