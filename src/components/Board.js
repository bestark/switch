import React from 'react'
import Square from "./Square";

export default class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            board: Array(25).fill(null)
        }

        this.handleClick = this.handleClick.bind(this);
        this.canBeSet = this.canBeSet.bind(this);
    }

    canBeSet(fieldNumber, pos) {
        if (pos === 'top' || pos === 'bottom') {
            if (fieldNumber > 4 && fieldNumber < 20) {
                return fieldNumber;
            }
        }

        if (pos === 'right') {
            if (fieldNumber !== 4 && fieldNumber !== 9 && fieldNumber !== 14 && fieldNumber !== 19 && fieldNumber !== 24) {
                return fieldNumber;
            }
        }
        if (pos === 'left') {
            if (fieldNumber !== 0 && fieldNumber !== 5 && fieldNumber !== 10 && fieldNumber !== 15 && fieldNumber !== 20) {
                return fieldNumber;
            }
        }
    }

    handleClick(e) {
        // get Index
        const elIndex = parseInt(e.target.getAttribute('data-index'));

        // get All squares
        const squares = this.state.board.slice();

        const topEl = this.canBeSet(elIndex - 5, 'top');
        const bottomEl = this.canBeSet(elIndex + 5, 'bottom');
        const leftEl = this.canBeSet(elIndex - 1, 'left');
        const rightEl = this.canBeSet(elIndex + 1, 'right');

        squares[elIndex] = 'X';
        this.setState(() => ({
            board: squares
        }));
    }

    createBoard(size = 5) {
        let board = [];
        let row = [];
        let index = 0;

        for (let i = 0; i < size; i++) {
            let column = [];
            for (let j = 0; j < size; j++) {
                column.push(<Square key={index} index={index} value={this.state.board[index]}
                                    onClick={this.handleClick}/>);
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
