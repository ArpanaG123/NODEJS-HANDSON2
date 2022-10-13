const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("This is home Page")

})

app.get('/About',(req,res) => {
    res.send("This is About Us Page!!")
})

app.listen('4000',(req,res) => {
    console.log("Express Server!!");
})