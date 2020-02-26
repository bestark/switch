import React from 'react'
import Square from "./Square";

export default class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            board: Array(25).fill(null)
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // get Index
        const elIndex = parseInt(e.target.getAttribute('data-index'));

        // get All squares
        const squares = this.state.board.slice();

        // set square in field
        if(!!squares[elIndex]) {
            //get nearby field
            //no top
            if(elIndex < 5) {
                console.log('has no top');
            }

            // no right
            if(elIndex === 4 || elIndex === 9 || elIndex === 14 || elIndex === 19 || elIndex === 24) {
                console.log('has no right');
            }

            // no bottom
            if(elIndex > 19) {
                console.log('has no bottom');
            }

            // no left
            if(elIndex === 0 || elIndex === 5 || elIndex === 10 || elIndex === 15 || elIndex === 20) {
                console.log('has no left');
            }

        }
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
