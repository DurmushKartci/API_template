"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { matematik_sorusu } from "./exports/Main";
// Contstructor
const SERVER_PORT = 1221;
let app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello");
});
app.get("/json", (req, res) => {
    let user_json = require("./database/user.json");
    res.send(user_json);
});
// app.get("/object",(req,res)=>{
//     res.send(matematik_sorusu)
// })
app.listen(SERVER_PORT, () => { console.log("Listening on", SERVER_PORT, "\n\n\n"); });
