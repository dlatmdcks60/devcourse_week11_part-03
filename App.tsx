import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let name = '리액트';
    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
    };

    return (
        <div style={style}>
            <h1 className="test">Hello, {name === '리액트' ? <h1>Yes</h1> : <h1>No</h1>}</h1>
        </div>
    );
}

export default App;
