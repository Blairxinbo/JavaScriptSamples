import React, { Component } from 'react'
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Job</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr>
//                     <td>Charlie</td>
//                     <td>Janitor</td>
//                 </tr>
//                 <tr>
//                     <td>Mac</td>
//                     <td>Bouncer</td>
//                 </tr>
//                 <tr>
//                     <td>Dee</td>
//                     <td>Aspiring actress</td>
//                 </tr>
//                 <tr>
//                     <td>Dennis</td>
//                     <td>Bartender</td>
//                 </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
export default Table