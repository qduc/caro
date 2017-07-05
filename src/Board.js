import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameEnded: false,
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
        if (this.state.gameEnded) {
            return;
        }

        if (this.state.board[row][col] === null) {
            // Update board
            let newBoard = this.state.board.slice();
            newBoard[row][col] = this.state.thisTurn;
            this.setState({
                board: newBoard
            });

            // Did someone win?
            let win = this.checkWin(this.props.size, row, col, this.state.board);
            if (win) {
                this.setState({gameEnded: true});
                this.props.handleEndGame(this.state.thisTurn);
                return;
            }

            // If not, change turn and continue
            this.setState({
                thisTurn: 1 - this.state.thisTurn
            });
        }
    }

    checkWin(size, row, col, board) {
        const currentPlayer = board[row][col];
        let offset = 1;
        let direction = {
            up: 1,
            down: 1,
            left: 1,
            right: 1,
            ul: 1,
            ur: 1,
            dl: 1,
            dr: 1,
        };
        while (offset < 5) {
            if (col + offset === size) {
                direction.right = 0;
                direction.ur = 0;
                direction.dr = 0;
            }
            if (row + offset === size) {
                direction.down = 0;
                direction.dl = 0;
                direction.dr = 0;
            }
            if (col - offset < 0) {
                direction.left = 0;
                direction.ul = 0;
                direction.dl = 0;
            }
            if (row - offset < 0) {
                direction.up = 0;
                direction.ul = 0;
                direction.ur = 0;
            }

            let cell = {
                up: direction.up === 0 ? null : board[row - offset][col],
                down: direction.down === 0 ? null : board[row + offset][col],
                left: direction.left === 0 ? null : board[row][col - offset],
                right: direction.right === 0 ? null : board[row][col + offset],
                ul: direction.ul === 0 ? null : board[row - offset][col - offset],
                ur: direction.ur === 0 ? null : board[row - offset][col + offset],
                dl: direction.dl === 0 ? null : board[row + offset][col - offset],
                dr: direction.dr === 0 ? null : board[row + offset][col + offset],
            };

            for (let k in cell) {
                if (direction[k] !== 0 && cell[k] === currentPlayer) {
                    direction[k]++;
                } else {
                    direction[k] = 0;
                }
            }

            if ((direction.up + direction.down === 5) ||
                (direction.left + direction.right === 5) ||
                (direction.ul + direction.dr === 5) ||
                (direction.ur + direction.dl === 5))
            {
                return true;
            }

            offset++;
        }

        return false;
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
