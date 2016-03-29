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
  console.log(' I am going to print hello world :: ' + getDateTime());
  res.send('HELLO WORLD -- version 1.2 \n');
});
app.get('/down', function (req, res) {
  process.exit();
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
}
