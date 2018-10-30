var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var todoRouter = require('./routers/todo');
var app = new express();

function myErrorMiddleWare(err, req, res, next) {
    if (err) {
        res.staus(500).send(err);
    }
}

// app.use(express.static('/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/todo", todoRouter);

app.use(myErrorMiddleWare);

module.exports = app;