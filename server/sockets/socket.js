
const { io } = require('../server');

io.on('connection', (client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario:'Admin',
        mensaje:'Bienvenido a esta app'
    })

    client.on('disconnect',()=>{
        console.log('usuario desconectado');
    })

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback ) =>{
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        
       /* if(mensaje.usuario){
            callback({
                rep:'TODO SALIO BIEN'
            });
        }else{
            callback({
                rep:'TODO SALIO MAAAAAALLLLL'
            });
        }*/

        
    })


});