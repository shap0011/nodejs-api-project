const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hi From GET API!");
});

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("Hello From POST API!");
});

app.put("/",(req,res)=>{
    res.send("Hi From PUT API!");
});

app.delete("/",(req,res)=>{
    res.send("Hi From DELETE API!");
});

app.listen(4001);
