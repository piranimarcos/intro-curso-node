var net = require('net');
var sockets = [];

var server = net.createServer(function (socket) {
      sockets.push(socket);
      socket.write('Bienvenido al Chat ;)\r\n');
      
      socket.on("data", function(d){
        sockets.forEach(function(v,i){
            v.write(d);    
        });    
      });

      socket.on("end", function(){
          var index = sockets.indexof(socket);
          delete sockets[index];
      });
}); 

server.listen(1337, '192.168.1.73');
