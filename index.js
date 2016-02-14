var express = require('express');
// Constants
var PORT = 8080;
// App
var app = express();
app.post('/', function (req, res) {
  res.send('<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soapenv:Body><ns:soapHelloResponse  xmlns:ns="http://services.samples/xsd">Hello World !! </ns:soapHelloResponse></soapenv:Body></soapenv:Envelope>');
});
app.post('/soapHello', function (req, res) {
  res.send('<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soapenv:Body><ns:soapHelloResponse  xmlns:ns="http://services.samples/xsd">Hello World !! </ns:soapHelloResponse></soapenv:Body></soapenv:Envelope>');
});

app.get('/', function (req, res) {
  res.send('++++ Hello world ++++ \n');
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
