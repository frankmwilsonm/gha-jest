import express from "express";

const app = express();

app.get('/user', (req, res)=>{
    res.status(200).json();
})

app.get('/allusers', (req, res)=>{
    res.json([]);
})

app.get('/person', (req, res)=>{
    res.json({});
})

app.post("/newuser", (req, res) => {
    res.status(200).json();
  });

app.post("/adduser", (req, res) => {
    res.json({});
  });





export default app;