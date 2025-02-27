import { Router } from "express";
import cors from "cors";
import todoRoutes from "../modules/todo/todo.routes";

const corsConfig = {
  origin: [
    "http://localhost:5000",
    "http://localhost:3000",
    "http://elcho.dev",
  ],
};

const router = Router();
router.use("/todo", cors(corsConfig), todoRoutes);

export default router;
