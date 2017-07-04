import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: []
        };

        const size = props.size;
        for (let i=0; i<size; i++) {
            let row = [];
            for (let j=1; j<=size; j++) {
                row.push(i*size + j);
            }
            this.state.board.push(row);
        }
    }

    render() {
        let rows = this.state.board.map((row) => {
            let cells = row.map((cell) =>
                <Cell value={cell} />
            );

            return (
                <tr>
                    {cells}
                </tr>
            )
        });

        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default Board;
