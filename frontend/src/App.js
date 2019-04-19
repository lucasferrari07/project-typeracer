import React, { useState } from 'react';
import './App.css';
import Quote from './Quote';
import Typer from './Typer';

const App = () => {
  const quoteText = 'It is not the mountain we conquer but ourselves.';
  const [typedText, setTyped] = useState('');

  return (
    <div className="App">
      <h1>Typeracer</h1>
      <form>
        <Quote typedText={typedText} quoteText={quoteText} />
        <Typer onInputChange={setTyped} />
      </form>
    </div>
  );
};

export default App;
