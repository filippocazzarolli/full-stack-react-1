// Model data
var todos = [];
var id = 0;
//********

exports.paramID = function(req, res, next, id) {
	var todo = _.find(todos, { id: id });

	if (todo) {
		req.todo = todo;
		next();
	} else {
		res.send();
	}
};

exports.getAll = function(req, res) {
	res.json(todos);
};

exports.insert = function(req, res) {
	var todo = req.body;

	id++;
	todo.id = id + "";
	todos.push(todo);

	res.json(todos);
};

exports.getID = function(req, res) {
	res.json(req.todo || {});
};

exports.putID = function(req, res) {
	var update = req.body;
	if (update.id) {
		delete update.id;
	}

	if (!req.todo) {
		res.send();
	} else {
		var todoID = req.todo.id;
		var updateTodos = _.assign(todos[todoID], update);
		res.send(updateTodos);
	}
};

exports.deleteID = function(req, res) {
	if (!req.todo) {
		res.send();
	} else {
		todos.splice(req.todo, 1);
		res.send(req.todo);
	}
};
