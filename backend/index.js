//this is just for testing purpose for the 
//please just refer the frontend part 
//until this comment exists

const express = require('express');

const app = express();

app.get('/info',(req,res)=>{
    res.json({
        message: "get route is working over deployment"
    })
})

app.listen(3000,()=>{
    console.log("backend is listning");
})