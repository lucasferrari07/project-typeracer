import React, { useState } from 'react';
import { zip, findIndex } from 'lodash';
import './App.css';
import Quote from './Quote';
import Typer from './Typer';

const App = () => {
  const quoteText = 'It is not the mountain we conquer but ourselves.';
  const [typedText, setTyped] = useState('');
  const [finished, setFinished] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const wordArray = quoteText.match(/\b(\w+\W+)/g).map(match => ({
    text: match,
    offset: quoteText.indexOf(match),
  }));
  const onWordMatch = () => {
    if (wordIndex < wordArray.length - 1) {
      return setWordIndex(wordIndex + 1);
    }
    return setFinished(true);
  };
  const getCursorOffset = () => wordArray[wordIndex].offset + typedText.length;
  const getFirstIncorrectLetterOffset = () => (
    wordArray[wordIndex].offset + findIndex(
      zip([...typedText], [...wordArray[wordIndex].text]),
      ([typedLetter, quoteLetter]) => typedLetter !== quoteLetter,
    )
  );
  const intervals = new Map([
    ['typed', [0, getFirstIncorrectLetterOffset()]],
    ['incorrect', [getFirstIncorrectLetterOffset(), getCursorOffset()]],
    ['untyped', [getCursorOffset(), quoteText.length]],
  ]);
  return (
    <div className="App">
      <h1>Typeracer</h1>
      {!finished
        ? (
          <form>
            <Quote
              typedText={typedText}
              quoteArray={wordArray}
              currentWord={wordIndex}
              intervals={intervals}
            />
            <Typer
              onInputChange={setTyped}
              expectedWord={wordArray[wordIndex].text}
              onWordExact={onWordMatch}
              maxLength={quoteText.length - wordArray[wordIndex].offset}
            />
          </form>
        ) : (
          <p>Finished!</p>
        )}
    </div>
  );
};

export default App;
