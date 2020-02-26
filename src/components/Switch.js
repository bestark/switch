import React from 'react'
import Board from "./Board";

export default class Switch extends React.Component {
    render() {
        return (
            <div className="game-board">
                <Board/>
            </div>
        );
    }
}
