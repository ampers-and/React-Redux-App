import React from 'react';
import './App.css';

import styled from 'styled-components';

import Spell from './components/Spell';

//Styles
const Title = styled.h1`
  color: white,
  font-family: 'UnifrakturMaguntia' !important,
  font-size: 2rem,
`


function App() {
  return (
    <div className="App">
        <Title>So you want to learn magic?</Title>
        <h2>Learn spells with our handy dandy spell generator!</h2>
        <Spell />
    </div>
  );
}

export default App;
