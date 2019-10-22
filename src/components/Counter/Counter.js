import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }

    render() {
        return <div>
            <h1>{this.state.number}</h1>
            <h1>
                <button onClick={() => {
                    this.setState({number: this.state.number + 1})
                }}> Increment
                </button>

                <button onClick={() => {
                    this.setState({number: this.state.number - 1})
                }}> Decrement
                </button>
            </h1>
        </div>
    }
}

export default Counter;