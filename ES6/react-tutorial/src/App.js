import React, { Component } from 'react'
import Table from './Table'
import Form from "./Form";
import JokeAPI from "./JokeAPI";

class App extends Component {
    //Data with state, update private from a component
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }
    //add a remove filter to delete data
    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter ((characters, i) => {
                return i !== index
            }),
        })
    }

    //submit the update data to the parent state
    handleSubmit = (name, job) => {
        this.setState({name: name, job: job})
    }


    render() {
        // return (
        //     <div className="container">
        //         <Table />
        //     </div>
        // )

        //React handle passing data using properties
        // const characters = [
        //     {
        //         name: 'Charlie',
        //         job: 'Janitor',
        //     },
        //     {
        //         name: 'Mac',
        //         job: 'Bouncer',
        //     },
        //     {
        //         name: 'Dee',
        //         job: 'Aspring actress',
        //     },
        //     {
        //         name: 'Dennis',
        //         job: 'Bartender',
        //     },
        // ]

        return (
            <div className="container">
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
                <JokeAPI name={this.state.name} job={this.state.job}/>
            </div>
        )
    }
}

export default App