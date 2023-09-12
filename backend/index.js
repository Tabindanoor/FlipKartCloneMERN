
import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import DefaultData from "./DefaultData.js";
dotenv.config()
import Router from "./routes/Route.js";
app.use(express.json())
app.use(cors())
app.use("/",Router)

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
    app.listen(process.env.PORT, () => {
        console.log("server is running on port 8000");
         DefaultData();
      });                                                      
     
  })
  .catch((err) => {
    console.error("Error connecting to Database:", err); // if there's an error while connecting to the db, it will show the error message here
  });

  



