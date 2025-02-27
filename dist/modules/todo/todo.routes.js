"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controllers_1 = __importDefault(require("./todo.controllers"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/v1/todo/products:
 *   get:
 *     summary: Получить продукты
 *     description: Возвращает массив всех продуктов
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         example: 1
 *                       image:
 *                         type: string
 *                         example: "http://localhost:3000/"
 *                       name:
 *                         type: string
 *                         example: "asdf"
 *                       price:
 *                         type: string  # если у тебя реально строка
 *                         example: "123"
 */
router.get("/products", todo_controllers_1.default.getAllTodo);
/**
 * @swagger
 * /api/v1/todo/products:
 *   post:
 *     summary: Добавить новый продукт
 *     description: Создаёт новый продукт и возвращает его данные
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 example: "http://localhost:3000/"
 *               name:
 *                 type: string
 *                 example: "asdf"
 *               price:
 *                 type: string  # Если у тебя price хранится строкой
 *                 example: "123"
 *     responses:
 *       201:
 *         description: Продукт успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 results:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     image:
 *                       type: string
 *                       example: "http://localhost:3000/"
 *                     name:
 *                       type: string
 *                       example: "asdf"
 *                     price:
 *                       type: string
 *                       example: "123"
 *       400:
 *         description: Ошибка валидации (не переданы необходимые поля)
 */
router.post("/products", todo_controllers_1.default.addProduct);
exports.default = router;
