// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) get a reference to the div with the ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
    let message = 'Bye there!';
    if (Math.random() > 0.5) {
        message = 'Hi there!';
    }
    
    return <h1>The message is {message} and the current time is: {new Date().toLocaleTimeString()}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);