import React from 'react'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    createBoard(size = 5) {

    }

    render() {
        return (
            <div className={"board"}>
                {this.createBoard(5)}
            </div>
        )
    }
}
