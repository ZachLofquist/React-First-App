import React from 'react'

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

function TableBody(props) {
    const rows = props.character_data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick = {() => props.removeCharacter(index)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
      }
    );
    return (
      <tbody>
          {rows}
      </tbody>
    );
}

function Table(props) {
    return (
      <table>
        <TableHeader />
        <TableBody character_data={props.character_data} removeCharacter = {props.removeCharacter} />
      </table>
    );
} 

export default Table;