import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.number}</h1>
                <header className="App-header">
                    <h1>
                        <button onClick={() => {
                            this.setState({number: this.state.number + 1})
                        }}> +
                        </button>

                        <button onClick={() => {
                            this.setState({number: this.state.number - 1})
                        }}> -
                        </button>
                    </h1>

                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Reacc
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
