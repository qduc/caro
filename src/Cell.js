import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handleClick(this.props.row, this.props.col);
    }

    render() {
        return (
            <td onClick={this.handleClick} >{this.props.value}</td>
        )
    }
}

export default Cell;