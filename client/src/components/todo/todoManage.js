import React, { Component } from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

class TodoManage extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            txtTitleInvalid: false,
            txtTitleValue: ''
        }

        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeTitle(event) {
        const val = event.target.value
        this.setState({ txtTitleValue: val })
    }

    onSubmit(event) {
        event.preventDefault()

        if (!this.state.txtTitleValue) {
            this.setState({ txtTitleInvalid: true })
        } else {
            this.setState({ 
                txtTitleValue: '',
                txtTitleInvalid: false 
            })

            this.props.insTodo(this.state.txtTitleValue)
        }
    }

    render() {
        const { txtTitleInvalid, txtTitleValue } = this.state

        return (
            <Form inline onSubmit={this.onSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="txtTitle" className="mr-sm-2">Title</Label>
                    <Input
                        type="text"
                        name="title"
                        id="txtTitle"
                        placeholder="todo..."
                        invalid={txtTitleInvalid}
                        value={txtTitleValue}
                        onChange={this.onChangeTitle} />
                </FormGroup>
                <Button color="primary">Add</Button>
            </Form>
        )
    }
}

TodoManage.propTypes = {
    insTodo: PropTypes.func.isRequired
}

export default TodoManage