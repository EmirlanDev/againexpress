import { Request, Response } from "express";

const data: any[] = [];

const getAllTodo = async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      success: true,
      results: data,
    });
  } catch (error) {
    console.error(`Error in getAllTodo: ${error}`);
    res.status(500).send({
      success: false,
      message: `Error in getAllTodo: ${error}`,
    });
  }
};

const addProduct = async (req: Request, res: Response): Promise<any> => {
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
  } catch (error) {
    console.error(`Error in addData: ${error}`);
    res.status(500).send({
      success: false,
      message: `Error in addData: ${error}`,
    });
  }
};

export default {
  getAllTodo,
  addProduct,
};
