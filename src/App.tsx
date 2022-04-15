import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ['Dimych', 'Sveta', 'Viktor', 'Valera', 'Ignat']
    const users = [{id: 1, name: 'Dimych'}, {id: 21, name: 'Sveta'}, {id: 22, name: 'Viktor'}, {
        id: 25,
        name: 'Valera'
    }, {id: 2, name: 'Ignat'}]
    const liElements = users.map((u, index) => <div key={u.id}>
        <li>{u.name}</li>
    </div>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
