const express = require('express');
const app=express();
const cors = require('cors');
const port=process.env.PROT || 3000;



app.use(cors());
app.use(express.json());

users=[
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com"
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com"
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "email": "diana.prince@example.com"
  },
  {
    "id": 5,
    "name": "Ethan Hunt",
    "email": "ethan.hunt@example.com"
  }
]


app.get("/",(req,res)=>{
    res.send("user server management");
})


app.get("/users",(req,res)=>{
    res.send(user);
})

app.post("/users",(req,res)=>{
    console.log('user post method');
    const newUser=req.body;
    newUser.id=users.length + 1;
    users.push(newUser)
    res.send(newUser);
    console.log(req.body)
})

app.listen(port,()=>{
    console.log(`user management server in running on port:${port}`);
})