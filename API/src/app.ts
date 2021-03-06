import express from "express";
import 'reflect-metadata';
import "./database";
import { router } from './routes';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export { app };
