import express from "express"
import { matematik_sorusu } from "./exports/Main";

// Contstructor
const SERVER_PORT = 1221;

let app = express();



app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/json",(req,res)=>{
    let user_json = require("./database/user.json")
    res.send(JSON.stringify(user_json))
})

app.get("/object",(req,res)=>{
    console.log(JSON.stringify(matematik_sorusu))
    res.send("hello<br>" + matematik_sorusu.toHTML())
})

app.listen(SERVER_PORT,()=>{console.log("Listening on",SERVER_PORT,"\n\n\n")})