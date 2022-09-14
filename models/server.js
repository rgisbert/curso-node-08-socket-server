const cors = require('cors');
const express = require('express');

/**
 * Clase para crear instancia del servidor
 */
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.#middlewares();
  }

  #middlewares() {
    this.app.use(cors());

    // Directorio público
    this.app.use(express.static('public'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor levantado en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
