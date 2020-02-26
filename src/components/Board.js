import React from 'react'
import Square from "./Square";

export default class Board extends React.Component {
    constructor(props) {
        super(props)

    }

    handleClick(e) {
        const elIndex = e.target.getAttribute('data-index');
        const squares = this.state.board.slice();
        squares[elIndex] = 'X';
        this.setState(() => ({
            board: squares
        }));
    }

    createBoard(size = 5) {
        let board = [];
        let row = [];
        let index = 0;

        for(let i = 0; i< size; i++) {
            let column = [];
            for (let j = 0; j < size; j++) {
                column.push( <Square key={index} index={index} value={this.state.board[index]} onClick={this.handleClick}/>);
                index++;
            }
            row.push(<div key={i} className={"board__row"}>{column}</div>)
        }

        board.push(row);

        return board;
    }

    render() {
        return (
            <div className={"board"}>
                {this.createBoard(5)}
            </div>
        )
    }
}
