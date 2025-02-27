import { config } from "dotenv";
config();
import express from "express";
import routes from "./routes/index";

export const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.get("/", (req, res) => {
    res.status(200).send({
      message: "Hello world",
    });
  });

  server.use("/api/v1", routes);

  return server;
};
