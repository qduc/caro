import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisTurn: 0,
            board: []
        };

        this.clickHandler = this.clickHandler.bind(this);

        const size = props.size;
        for (let i=0; i<size; i++) {
            let row = [];
            for (let j=1; j<=size; j++) {
                row.push(null);
            }
            this.state.board.push(row);
        }
    }

    clickHandler(row, col) {
        if (this.state.board[row][col] === null) {
            let newBoard = this.state.board.slice();
            newBoard[row][col] = this.state.thisTurn;
            this.setState({
                thisTurn: 1 - this.state.thisTurn
            });
            this.setState({
                board: newBoard
            });
        }
    }

    render() {
        let rows = this.state.board.map((row, i) => {
            let cells = row.map((cell, j) =>
                <Cell key={i + ',' + j} col={j} row={i} value={cell} handleClick={this.clickHandler} />
            );

            return (
                <tr key={"row-" + i}>
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
