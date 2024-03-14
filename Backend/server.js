//creating and express server
//step 1 : require express
import express from "express";
//step 2 : create an express app
const app = express();
//step 3 : specify port and callback
//config for environmental files
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import connectMongo from "./DB/connectMongo.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectMongo();
    console.log(`Server functional on PORT ${PORT}`)
});

//home route
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

//middlewares
//whenever we visit an api which starts like /api/auth authRoutes will be referenced
app.use("/api/auth", authRoutes);
app.use(express.json());
