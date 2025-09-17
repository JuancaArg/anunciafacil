import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerSockets } from "./sockets.js"; // 👈 con ".js" porque usamos ES6

const app = express();
const httpServer = createServer(app);

// Configuración de Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: "*", // ajusta según tu frontend
  },
});

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("Servidor Express + Socket.IO + TypeScript + ES6");
});

// Registrar eventos de sockets
registerSockets(io);

// Levantar servidor
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
