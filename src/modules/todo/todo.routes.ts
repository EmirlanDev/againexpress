import { Router } from "express";
import todoControllers from "./todo.controllers";

const router = Router();

router.get("/products", todoControllers.getAllTodo);
router.post("/products", todoControllers.addProduct);

export default router;
