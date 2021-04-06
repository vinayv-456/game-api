const express = require('express');
const app = express();

app.get('/', async (req, res)=>{
    try{
       console.log("testing")
    }
    catch(e){
        console.log(e);
        throw ("Failed to fecth data", e)
        client.release();
    }
      res.status(200).send("working");
})


app.listen(4000, ()=> {
    console.log('app is running on port 3000');
  })