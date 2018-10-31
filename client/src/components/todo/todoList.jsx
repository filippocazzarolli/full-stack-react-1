import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'reactstrap'
import TodoItem from './todoItem'

const todoList = ({ todos, delTodo }) => {
    return (
        <ListGroup>
            {todos.map(todo =>
                <TodoItem key={todo.id} todo={todo} delTodo={delTodo} />
            )}
        </ListGroup>
    )
}

todoList.prototype = {
    todos: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default todoList