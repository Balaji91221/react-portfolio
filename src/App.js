import './App.css';
import React from 'react';
import Header from "./components/Header/Header.jsx"
import Nav from "./components/Nav/Nav.jsx"
import About from './components/about.jsx/About';
import Education from "./components/Education/Education.jsx"

import Contact from './components/Contact/Contact.jsx'
function App() {
    return (
        <div className="App">
     
        <Header/>
        <Nav/>
        <About/>
        <Education/>
        <Contact/>
        </div>
    );
}

export default App;
        

