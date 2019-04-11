import React, { Component } from 'react'

//create a class component Form to add new data
class Form extends Component {
    constructor(props) {
        super(props)

        //initial state
        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState
    }

    //make a function when a change is made to an input
    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state.name, this.state.job)
        this.setState(this.initialState)
    }

    render() {
        const {name,job} = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}
                />
            </form>
        )
    }
}

export default Form;