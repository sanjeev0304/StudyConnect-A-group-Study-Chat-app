import { Server } from 'socket.io';

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log('Initializing Socket.IO server...');

    const io = new Server(res.socket.server, {
      path: "/api/socket",
      addTrailingSlash: false,
      cors: {
        origin: "http://localhost:3000", // Adjust this for production
        methods: ["GET", "POST"]
      }
    });

    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);

      // Listen for messages
      socket.on('send-message', ({ username, message }) => {
        io.emit('receive-message', { username, message });
      });

      // Handle disconnection
      socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
