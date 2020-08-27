//----------------------------------//
//on es para escuchar
//emit es para enviar informacion
//----------------------------------//
var socket = io();

//cuando el server se conecta
socket.on('connect', function () {
    console.log('conectado al servidor');
});

//cuando perdemos conexion con el server
socket.on('disconnect', function () {
    console.log('perdimos conexion con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jefferson',
    mensaje: 'hola mundo'
}, function (resp) {
    console.log('respuesta server: ', resp);
});

//recibir informacion
socket.on('sendMessage', function (mensaje) {
    console.log('Servidor: ', mensaje);


});