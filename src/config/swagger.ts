import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Документация API для работы с продуктами",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Локальный сервер",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Путь к файлам с роутами
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log(
    "📄 Swagger UI доступен по адресу: http://localhost:5000/api-docs"
  );
}
