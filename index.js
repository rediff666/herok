var http = require('http');
var server = http.createServer();
 
function mensaje(petic, resp) {
	// resp.writeHead(200, {'content-type': 'text/plain'});
	// resp.write('App prueba heroku, Segunda parte agregado');
	// resp.end();

	resp.writeHead(200, {'content-type': 'text/html'});
	resp.write("<h1 style='background-color:yellow;color:purple;'>")
	resp.write('Parte agregada en html');
	resp.write("</h1>")
	resp.end();

}
server.on('request', mensaje);
 
server.listen(5000, function () {
  	console.log('La Aplicación está funcionando en el puerto 5000');
});