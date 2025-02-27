"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [];
const getAllTodo = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            results: data,
        });
    }
    catch (error) {
        console.error(`Error in getAllTodo: ${error}`);
        res.status(500).send({
            success: false,
            message: `Error in getAllTodo: ${error}`,
        });
    }
};
const addProduct = async (req, res) => {
    try {
        const { image, name, price } = req.body;
        if (!image || !name || !price) {
            return res.status(400).send({
                success: false,
                message: `Поля 'image', 'name' и 'price' обязательны`,
            });
        }
        const newData = {
            id: data.length + 1,
            image,
            name,
            price,
        };
        data.push(newData);
        res.status(201).send({
            success: true,
            results: data,
        });
    }
    catch (error) {
        console.error(`Error in addData: ${error}`);
        res.status(500).send({
            success: false,
            message: `Error in addData: ${error}`,
        });
    }
};
exports.default = {
    getAllTodo,
    addProduct,
};
