import React, { Component } from 'react';
import Form from './Form';
import DisplayData from './DisplayData';


class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render() {
        return (
            <div>
                <Form
                    formData={this.state}
                    handleChange={this.handleeChange}
                />
                <DisplayData formData={this.state} />
            </div>
        )
    }
}

export default ParentComponent;