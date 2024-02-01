// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) get a reference to the div with the ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
    const inputType = "number";
    const minValue = 5;
    const message = "Enter age";
    return (
        <input
            type={inputType}
            min={minValue}
            max={10}
            list={[1,2,3]}
            style={{ color: 'red',border: '3px solid green' }}
            alt={message}
        />
    );
}

// 5) Show the component on the screen
root.render(<App />);