import React from 'react';
import QuoteLetter from './QuoteLetter';
import './QuoteWord.css';

const QuoteWord = ({ word, isCurrent, typedArray }) => {
  const wordArray = word.split('');
  return (
    <span className={isCurrent ? 'current-word' : ''}>
      {wordArray.map(
        (letter, index) => (
          <QuoteLetter
            key={index.toString()}
            quoteLetter={letter}
            typedLetter={typedArray[index]}
          />
        ),
      )}
    </span>
  );
};

export default QuoteWord;
