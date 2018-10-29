var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");

var app = new express();

function myErrorMiddleWare(err, req, res, next) {
    if (err) {
        res.staus(500).send(err);
    }
}

// app.use(express.static('/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.param("id", function (req, res, next, id) {
    var todo = _.find(todos, { id: id });

    if (todo) {
        req.todo = todo;
        next();
    } else {
        res.send();
    }
});


var todos = []
var id = 0;

app.get("/api/todos", function (req, res) {
    res.json(todos);
});

app.get("/api/todo/:id", function (req, res) {
    res.json(req.todo || {});
});

app.post("/api/todo", function (req, res) {
    var todo = req.body;

    id++;
    todo.id = id + '';
    todos.push(todo);

    res.json(todos);
});

app.put("/api/todo/:id", function (req, res) {
    var update = req.body;
    if (update.id) {
        delete update.id;
    }

    // var todoID = _.findIndex(todos, { id: req.params.id });
    var todoID = req.todo ? req.todo.id : -1;
    if (!todos[todoID]) {
        res.send();
    } else {
        var updateTodos = _.assign(todos[todoID], update)
        res.send(updateTodos);
    }
});

app.delete("/api/todo/:id", function (req, res) {
    //var todoID = _.findIndex(todos, { id: req.params.id });
    var todoID = req.todo ? req.todo.id : -1;
    if (!todos[todoID]) {
        res.send();
    } else {
        var deleteTodo = todos[todoID];
        todos.splice(deleteTodo, 1);
        res.send(deleteTodo);
    }
});

app.use(myErrorMiddleWare);

var port = 3001;

app.listen(port, function () {
    console.log("server running port ", port);
});
