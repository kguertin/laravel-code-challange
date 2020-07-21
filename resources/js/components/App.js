import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav/Nav';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Footer />
        </>
    )
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
