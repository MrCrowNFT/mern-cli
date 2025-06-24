import dotenv from "dotenv";
import connectDb from "./config/db";
import express from "express";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  connectDb();
  console.log("Server started at http://localhost:" + PORT);
});
