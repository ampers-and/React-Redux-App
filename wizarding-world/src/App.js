import React from 'react';
import './App.css';

import Spell from './components/Spell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Title'>Learn Magic</h1>
        <h2 className='Subtitle'>Learn spells with our handy dandy spell generator!</h2>
        <Spell />
      </header>
    </div>
  );
}

export default App;
