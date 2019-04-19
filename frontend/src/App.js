import React, { useState } from 'react';
import './App.css';
import Quote from './Quote';
import Typer from './Typer';

const App = () => {
  const quoteText = 'It is not the mountain we conquer but ourselves.';
  const [typedText, setTyped] = useState('');
  const [finished, setFinished] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const wordArray = quoteText.match(/\b(\w+\W+)/g);
  const onWordMatch = () => {
    if (wordIndex < wordArray.length - 1) {
      return setWordIndex(wordIndex + 1);
    }
    return setFinished(true);
  };
  return (
    <div className="App">
      <h1>Typeracer</h1>
      {!finished
        ? (
          <form>
            <Quote typedText={typedText} quoteArray={wordArray} currentWord={wordIndex} />
            <Typer
              onInputChange={setTyped}
              expectedWord={wordArray[wordIndex]}
              onWordExact={onWordMatch}
            />
          </form>
        ) : (
          <p>Finished!</p>
        )}
    </div>
  );
};

export default App;
