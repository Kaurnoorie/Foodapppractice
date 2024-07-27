const express = require ("express");
//const mongoose = require('mongoose');
//import mongoose from 'mongoose';
//import { createRequire } from 'https://deno.land/std@0.177.0/node/module.ts';
//const require = createRequire(import.meta.url);
const cors = require ("cors");
const dishesRouter = require ("./routes/dishesRoutes")
const userRouter = require ("./routes/userRoutes")

const mongoose = require('mongoose');


// Using ES6 imports

const app = express();
const port = 7700;
app.use (cors());

app.use(express.json());

mongoose.connect('mongodb+srv://kaurprabhnoor202:WMtfgJyrn33y27hb@cluster0.ykxxzsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/FoodDelivery')
  .then(() => console.log('Connected!'));

  app.get("/",(request, response ) =>{
  response.send("HI i am noor")
}

);

app.use((req,res,next)=>{
  console.log("Time:", Date.now());
  next();
})
app.use("/api", dishesRouter)
app.use("/api", userRouter)


app.listen(port, () =>{

    console.log("Listening to code " + port)
});
 
