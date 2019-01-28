var socket = io();

//Código para ver cuando se hace conexión al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
})

//Código para ver cuando se desconecta el servidor (On es para escuchar)
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//Enviar información (emit para emitir)
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});