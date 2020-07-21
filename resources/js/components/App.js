import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav/Nav';

const App = () => {
    return (
        <>
            <Nav />
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
