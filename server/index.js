const express = require("express")
const app = express(); 


app.get("/", (req,res) =>{ 
    res.send("hello world this is my backend beautiful")
})
app.listen(3001, ()=> { 
    console.log('running port 3001')
})