import React from 'react'
import Square from "./Square";

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    renderSquare(i) {
        return <Square value={i}/>
    }

    createBoard(size = 5) {
        let board = [];
        let row = [];

        // create columns


        // create rows
        let index = 0;
        for(let i = 0; i< size; i++) {
            let column = [];
            for (let j = 0; j < size; j++) {
                column.push(<Square key={index} value={index}/>)
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
