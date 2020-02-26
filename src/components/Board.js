import React from 'react'
import Square from "./Square";
import {canBeSet} from "./utils";

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: this.getRandomBoard(),
            moves: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.startNewGame = this.startNewGame.bind(this);
    }

    getRandomBoard() {
        const pattern = [
            [6, 7, 8, 11, 13, 16, 17, 18],
            [0, 4, 6, 8, 12, 16, 18, 20, 24],
            [2, 6, 8, 10, 12, 14, 16, 18, 22]
        ];
        const randomNumber = Math.floor(Math.random() * 3);

        let initBoard = Array(25).fill(false);
        return initBoard.map((item, index) => pattern[randomNumber].includes(index));
    }

    startNewGame() {
        this.setState(() => ({
            board: this.getRandomBoard(),
            moves: 0
        }))
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

    getNearbyField(clickedElementIndex) {
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
                column.push(<Square key={index} enabled={this.playerFoundSolution()} index={index}
                                    value={this.state.board[index]}
                                    onClick={this.handleClick}/>);
                index++;
            }
            row.push(<div key={i} className={"board__row"}>{column}</div>)
        }

        board.push(row);

        return board;
    }

    playerFoundSolution() {
        let resolved = true;

        this.state.board.forEach((item) => {
            if (item === false) {
                resolved = false;
            }
        })

        return resolved;
    }

    render() {

        return (
            <div className={this.playerFoundSolution() ? "board is-won" : "board"}>
                {this.createBoard(5)}
                <div className={"board__info margin-center"}>
                    <p>Moves: {this.state.moves}</p>
                    <button className={"reset"} onClick={this.startNewGame}>Start new game</button>
                </div>
            </div>


        )
    }
}
