import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Nav from './components/Nav';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <Section2 />
        <Section3 />
        <Section4/>
    </div>
  );
}

export default App;
