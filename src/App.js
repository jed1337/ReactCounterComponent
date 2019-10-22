import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterWithReduxState from "./components/Counter/CounterWithReduxState";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <CounterWithReduxState/>

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

export default App;
