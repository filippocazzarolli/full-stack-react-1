var todoRouter = require('express').Router();
var _ = require('lodash');

var todos = []
var id = 0;

todoRouter.param("id", function (req, res, next, id) {
    var todo = _.find(todos, { id: id });

    if (todo) {
        req.todo = todo;
        next();
    } else {
        res.send();
    }
});

todoRouter.route('/')
    .get(function (req, res) {
        res.json(todos);
    })
    .post(function (req, res) {
        var todo = req.body;

        id++;
        todo.id = id + '';
        todos.push(todo);

        res.json(todos);
    });

todoRouter.route('/:id')
    .get(function (req, res) {
        res.json(req.todo || {});
    })
    .put(function (req, res) {
        var update = req.body;
        if (update.id) {
            delete update.id;
        }

        if (!req.todo) {
            res.send();
        } else {
            var todoID = req.todo.id;
            var updateTodos = _.assign(todos[todoID], update)
            res.send(updateTodos);
        }
    })
    .delete(function (req, res) {
        if (!req.todo) {
            res.send();
        } else {
            todos.splice(req.todo, 1);
            res.send(req.todo);
        }
    });

module.exports = todoRouter;
