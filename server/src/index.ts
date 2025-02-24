import dotenv from "dotenv";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS || "*",
    methods: ["GET", "POST", "PUT", "PATCH"],
  })
);

app.get("/", (req, res) => {
  res.json("Hello Socket.io server");
});
server.listen(port, () => console.log(`server running on port ${port}`));
