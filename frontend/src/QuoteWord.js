import React from 'react';
import QuoteLetter from './QuoteLetter';
import './QuoteWord.css';

const QuoteWord = ({
  word, isCurrent, intervals,
}) => {
  const wordArray = word.text.split('');
  return (
    <span className={isCurrent ? 'current-word' : ''}>
      {wordArray.map(
        (letter, index) => (
          <QuoteLetter
            key={index.toString()}
            quoteLetter={letter}
            offset={word.offset + index}
            intervals={intervals}
          />
        ),
      )}
    </span>
  );
};

export default QuoteWord;
