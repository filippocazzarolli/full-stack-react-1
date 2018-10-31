import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Button, ButtonGroup } from 'reactstrap'

const TodoItem = ({ todo, delTodo }) => {
    return (
        <ListGroupItem>
            <ButtonGroup style={{float:'right'}}>
                <Button color="danger" size="sm" onClick={(evt) => delTodo(todo.id)}>Del</Button>
                <Button color="primary" size="sm">Upd</Button>
            </ButtonGroup>
            {todo.title}
        </ListGroupItem>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem