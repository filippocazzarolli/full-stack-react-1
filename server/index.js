var app = require('./app');

var port = 3001;

app.listen(port, function () {
    console.log("server running port ", port);
});