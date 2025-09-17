import { Server, Socket } from "socket.io";

export function registerSockets(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log(`Usuario conectado: ${socket.id}`);

    // Evento de mensaje
    socket.on("mensaje", (msg: string) => {
      console.log(`📩 Mensaje recibido: ${msg}`);
      io.emit("mensaje", msg); // reenviar a todos
    });

    // Evento al desconectar
    socket.on("disconnect", () => {
      console.log(`❌ Usuario desconectado: ${socket.id}`);
    });
  });
}
