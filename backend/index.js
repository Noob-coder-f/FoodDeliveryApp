const express= require('express');
const app=express();
const port=5000;


//connection bnnae ke liye connectdb function bnaye h db.js me
const connectdb=require('./db');

app.use((req,res,next)=>{
    res.setHeader("Access-Control-allow-Origin","http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,x-Requested-With,Content-Type, Accept"
    );
    next();

})

connectdb();



app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));


app.get('/',(req,res)=>{
    res.send("Hello Faishal")
});

app.listen(port ,()=>{
    console.log(`Server is running on ${port}`)
});