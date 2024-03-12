//creating and express server
//step 1 : require express
import express from 'express';
//step 2 : create an express app
const app=express();
//step 3 : specify port and callback
//config for environmental files
import dotenv from 'dotenv';
dotenv.config();

const PORT=process.env.PORT || 5000

app.listen(5000,()=>console.log(`Server functional on PORT ${PORT}`));

//home route
app.get("/",(req,res)=>{
    res.send("Hello World!!!")
})
