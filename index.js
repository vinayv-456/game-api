const express = require('express');
const app = express();
const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

client.on("connect", function() {
  console.error("redis server connected...");
});

app.get('/', async (req, res)=>{
    try{
       console.log("testing")


      client.set("key", "value", redis.print);
      client.get("key", redis.print);
    }
    catch(e){
        console.log(e);
        throw ("Failed to fecth data", e)
    }
      res.status(200).send("working");
})


app.listen(4000, ()=> {
    console.log('app is running on port 3000');
  })