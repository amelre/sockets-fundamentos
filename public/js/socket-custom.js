var socket = io();

        socket.on('connect', function(){
            console.log('Conectado al servidor');
        });
        //on escuchar
        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor');
        });

        //emit enviar informacion
        socket.emit('enviarMensaje', {
            usuario:'Alejandra',
            mensaje:'Hola Mundo'
        }, function(resp){
            console.log(resp);
        })

        //escuchar info
        socket.on('enviarMensaje', function(res){
            console.log(res);
        });