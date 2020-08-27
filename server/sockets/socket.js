const { io } = require('../server');
//veridicamos que el usuario se conecta
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        usuario: 'Admin',
        message: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //para enviar a todos
        client.broadcast.emit('sendMessage', data);

        //ejemplo de usar el callback 
        /*if (message.usuario) {
            callback({
                ok: true,
                resp: 'Todo bien'
            });
        } else {
            callback({
                ok: true,
                resp: 'Todo mal alv'
            });
        }
        callback();*/
    });

});