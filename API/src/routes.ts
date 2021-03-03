import { Router } from "express";
import { UsersController } from "./controllers/UsersController";

const router = Router();

const usersController = new UsersController;

router.post("/login", usersController.auth);
router.post("/signUp", usersController.create);

export { router };