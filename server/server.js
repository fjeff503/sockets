//requires
const express = require('express');

const socketIO = require('socket.io');
const http = require('http');
const app = express();
let server = http.createServer(app);

const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializamos socketIO (Inputs Ouputs)
//IO = es la comunicacion del backend 
module.exports.io = socketIO(server);
//si todo esta bien entrar a http://localhost:3000/socket.io/socket.io.js (si aparece info todo esta bien)

require('./sockets/socket');


//levantamos el server
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});
