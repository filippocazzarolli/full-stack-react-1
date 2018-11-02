var todoRouter = require("express").Router();
var _ = require("lodash");
var todoController = require("./todoController");

todoRouter.param("id", todoController.paramID);

todoRouter
	.route("/")
	.get(todoController.getAll)
	.post(todoController.insert);

todoRouter
	.route("/:id")
	.get(todoController.getID)
	.put(todoController.putID)
	.delete(todoController.deleteID);

module.exports = todoRouter;
