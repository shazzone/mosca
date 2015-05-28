var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');

var http     = require('http')
  , httpServ = http.createServer()
  , mosca    = require('./')
  , mqttServ = new mosca.Server();

mqttServ.attachHttpServer(httpServ);

httpServer.listen(port, host);