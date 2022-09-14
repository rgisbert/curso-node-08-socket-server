const cors = require('cors');
const express = require('express');

/**
 * Clase para crear instancia del servidor
 */
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // === CFG SOCKET.IO ===
    // Servidor propio
    this.server = require('http').createServer(this.app);
    // Todas las conexiones de socket.io
    this.io = require('socket.io')(this.server);

    this.#middlewares();
  }

  #middlewares() {
    this.app.use(cors());

    // Directorio público
    this.app.use(express.static('public'));
  }

  listen() {
    // ! Substituye THIS.APP por THIS.SERVER
    this.server.listen(this.port, () => {
      console.log(`Servidor levantado en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
