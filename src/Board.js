import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Cell />
                        <Cell />
                        <Cell />
                    </tr>
                    <tr>
                        <Cell />
                        <Cell />
                        <Cell />
                    </tr>
                    <tr>
                        <Cell />
                        <Cell />
                        <Cell />
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Board;
