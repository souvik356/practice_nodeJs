const express = require("express")

const app = express()

app.use("/home",(req,res)=>{
   res.send("home page")
})

app.listen(6000,()=>{
    console.log("server is conneted to port 6000");
})