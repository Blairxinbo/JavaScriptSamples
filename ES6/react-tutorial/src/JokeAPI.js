import React, { Component } from 'react'
import Form from "./Form";

//fetch and GET a AJAX/API request
class JokeAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            job: props.job,
            error: null,
            isLoaded: false,
            values: []
        };
        console.log(props);
    }

    componentDidMount() {
        const data = {first: 'John', second: 'Doe'};
        fetch(`http://api.icndb.com/jokes/random?firstName=${encodeURIComponent(this.state.name)}&amp;lastName=${encodeURIComponent(this.state.job)}`,{
                method: "GET",
        }).then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        values: [result.value]
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, values } = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if(!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>

                    {values.map(value => (
                        <li key={value.id}>
                            {value.id} {value.joke}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default JokeAPI
