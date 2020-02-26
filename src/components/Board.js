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
            board,
            moves: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // get All squares
        const squares = this.state.board.slice();
        const elIndex = parseInt(e.target.getAttribute('data-index'));

        this.getNearbyField(elIndex).forEach((element) => {
            if (element || element === 0) {
                squares[element] = !squares[element];
            }
        })

        this.setState((prevState) => ({
            board: squares,
            moves: prevState.moves + 1
        }));
    }

    getNearbyField (clickedElementIndex) {
        const topEl = canBeSet(clickedElementIndex - 5, 'top');
        const bottomEl = canBeSet(clickedElementIndex + 5, 'bottom');
        const leftEl = canBeSet(clickedElementIndex - 1, 'left');
        const rightEl = canBeSet(clickedElementIndex + 1, 'right');

        return [clickedElementIndex, topEl, rightEl, bottomEl, leftEl];
    }

    createBoard(size = 5) {
        let board = [];
        let row = [];
        let index = 0;

        for (let i = 0; i < size; i++) {
            let column = [];
            for (let j = 0; j < size; j++) {
                column.push(<Square key={index} enabled={this.playerFoundSolution(this.state.board)} index={index} value={this.state.board[index]}
                                    onClick={this.handleClick}/>);
                index++;
            }
            row.push(<div key={i} className={"board__row"}>{column}</div>)
        }

        board.push(row);

        return board;
    }

    playerFoundSolution (board) {
        let resolved = true;

        board.forEach((item) => {
            if(item === false) {
                resolved = false;
            }
        })

        return resolved;
    }

    render() {

        return (
            <div className={"board"}>
                <p>Moves: {this.state.moves}</p>
                {this.createBoard(5)}
            </div>
        )
    }
}
