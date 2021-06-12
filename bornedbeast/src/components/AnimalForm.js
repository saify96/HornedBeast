import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class AnimalForm extends Component {
    render() {
        return (
            <div>
                <Form.Control as="select" defaultValue='0' onChange={this.props.chooseNumOfHorns}>
                    <option value="0">Show All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">100</option>
                </Form.Control>
            </div>
        )
    }
}

export default AnimalForm
