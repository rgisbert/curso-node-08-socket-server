const socketController = (socket) => {
  console.log(`Cliente ${socket.id} conectado`);

  socket.on('disconnect', () => {
    console.log(`Cliente ${socket.id} desconectado`);
  });

  // Capturar el emit del front-end, con ese mismo nombre
  // ? El parámetro callback hace referencia al tercer agumento del emit del front-end
  // ? se utiliza, por ejemplo, para poder manejar un comportamiento diferente en
  // ? el cliente que lanzó el evento personalizado.
  socket.on('enviar-mensaje', (payload, callback) => {
    const id = new Date().getTime();

    callback(id);
    // * Broadcast envía mensaje a todos
    socket.broadcast.emit('enviar-mensaje', payload);
  });
};

module.exports = {
  socketController,
};
