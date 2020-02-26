import React from 'react'
import Square from "./Square";
import {canBeSet} from "./utils";

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        const pattern = [
            [6, 7, 8, 11, 13, 16, 17, 18],
            [0, 4, 6, 8, 12, 16, 18, 20, 24],
            [2, 6, 8, 10, 12, 14, 16, 18, 22]
        ];
        const randomNumber = Math.floor(Math.random() * 3);

        let initBoard = Array(25).fill(false);
        let board = initBoard.map((item, index) => pattern[randomNumber].includes(index));

        this.state = {
            board
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        // get All squares
        const squares = this.state.board.slice();

        const elIndex = parseInt(e.target.getAttribute('data-index'));

        const topEl = canBeSet(elIndex - 5, 'top');
        const bottomEl = canBeSet(elIndex + 5, 'bottom');
        const leftEl = canBeSet(elIndex - 1, 'left');
        const rightEl = canBeSet(elIndex + 1, 'right');

        const allEl = [elIndex, topEl, rightEl, bottomEl, leftEl];

        allEl.forEach((element) => {
            if (element || element === 0) {
                squares[element] = !squares[element];
            }
        })

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
