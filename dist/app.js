"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const swagger_1 = require("./config/swagger");
const buildServer = () => {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.get("/", (req, res) => {
        res.status(200).send({
            message: "Hello world",
        });
    });
    server.use("/api/v1", index_1.default);
    (0, swagger_1.setupSwagger)(server);
    return server;
};
exports.buildServer = buildServer;
