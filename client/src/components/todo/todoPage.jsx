import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import TodoManage from './todoManage'
import TodoList from './todoList'

class TodoPage extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            todos: []
        }

        this.loadTodos = this.loadTodos.bind(this)
        this.insTodo = this.insTodo.bind(this)
        this.delTodo = this.delTodo.bind(this)
        this.delTodoState = this.delTodoState.bind(this)
    }

    componentDidMount() {
        this.loadTodos()
    }

    loadTodos() {
        fetch('/api/todo')
            .then(res => res.json())
            .then(todos => this.setState({ todos }))
            .catch(err => console.error(err))
    }

    insTodo(title) {
        if (title) {
            const opt = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ title })
            }

            fetch('/api/todo', opt)
                .then(res => res.json())
                .then(todos => this.setState({ todos }))
                .catch(err => console.error(err))
        }
    }

    delTodo(id) {
        if (id) {
            const opt = {
                method: 'DELETE'
            }

            fetch('/api/todo/' + id, opt)
                .then(res => res.json())
                .then(todo => this.delTodoState(todo))
                .catch(err => console.error(err))
        }
    }

    delTodoState(todo) {
        let { todos } = this.state
        todos.splice(todo, 1)

        this.setState({ todos })
    }

    render() {
        const { todos } = this.state

        return (
            <Container>
                <Row>
                    <Col><h1>Todos</h1></Col>
                </Row>
                <Row>
                    <Col><hr /></Col>
                </Row>
                <Row>
                    <Col><TodoManage insTodo={this.insTodo} /></Col>
                </Row>
                <Row>
                    <Col><hr /></Col>
                </Row>
                <Row>
                    <Col>{todos.length > 0 ? <TodoList todos={todos} delTodo={this.delTodo} /> : "nessun todo"}</Col>
                </Row>
            </Container>
        )
    }
}

export default TodoPage