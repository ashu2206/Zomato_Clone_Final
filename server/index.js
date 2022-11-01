import express from "express";
import dotenv from "dotenv";

// database connection
import ConnectDB from "./database/connection";

dotenv.config();
const zomato = express();

zomato.use(express.json());

zomato.get("/", (req, res) => {
  res.json({
    message: "server is running",
  });
});

const port = 4000;

zomato.listen(port, () => {
  ConnectDB()
    .then(() => {
      console.log("server is running");
    })
    .catch((error) => {
      console.log("server is runnig,  but database  connection failed");
      console.log("error");
    });
});
