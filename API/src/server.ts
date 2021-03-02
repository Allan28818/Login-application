import 'reflect-metadata';
import express from "express";

const app = express();

import "./database";


app.get("/", (requst, response) => {
  response.json({message: "hello world"});
});

app.listen(5555, () => console.log("Server is running!"));

export { app };