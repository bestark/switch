import React from 'react'

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        return (
            <button className="square" data-index={this.props.index} onClick={this.handleClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square
