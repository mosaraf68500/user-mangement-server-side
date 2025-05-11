const express = require('express');
const app=express();
const port=process.env.PROT || 3000;


app.get("/",(req,res)=>{
    res.send("user server management");
})


app.listen(port,()=>{
    console.log(`user management server in running on port:${port}`);
})