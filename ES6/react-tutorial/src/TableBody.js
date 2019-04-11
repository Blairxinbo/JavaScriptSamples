import React from 'react'

////Use ES6 arrow functions to create simple components (Body) to Table
const TableBody = props => {
    // return (
    //     <tbody>
    //     <tr>
    //         <td>Charlie</td>
    //         <td>Janitor</td>
    //     </tr>
    //     <tr>
    //         <td>Mac</td>
    //         <td>Bouncer</td>
    //     </tr>
    //     <tr>
    //         <td>Dee</td>
    //         <td>Aspiring actress</td>
    //     </tr>
    //     <tr>
    //         <td>Dennis</td>
    //         <td>Bartender</td>
    //     </tr>
    //     </tbody>
    // )

    //React handle data using properties
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default TableBody