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
            <button disabled={this.props.enabled} type={"button"} className={this.props.value ? 'square is-active' : 'square'} data-index={this.props.index} onClick={this.handleClick}></button>
        )
    }
}

export default Square
