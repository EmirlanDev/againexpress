import { buildServer } from "./app";

const server = buildServer();

const start = async () => {
  const PORT = process.env.PORT || 3001;

  try {
    const httpHost = server.listen(
      {
        port: PORT,
        host: "0.0.0.0",
      },
      () => {
        console.log(`${new Date()}`);
        console.log(`server run in: http://localhost:${PORT}`);
      }
    );
  } catch (error) {
    console.error(`server crash: ${error}`);
    process.exit(1);
  }
};

start();
