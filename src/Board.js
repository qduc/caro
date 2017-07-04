import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            board: [
                [1,2,3],
                [4,5,6],
                [7,8,9],
            ]
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
