import React from 'react';
import QuoteWord from './QuoteWord';

// import { zipWith } from 'lodash';

const Quote = ({ quoteArray, typedText, currentWord }) => {
  const typedArray = typedText.split('');
  return (
    quoteArray.map(
      (word, wordIndex) => (
        <QuoteWord
          key={wordIndex.toString()}
          word={word}
          isCurrent={wordIndex === currentWord}
          typedArray={typedArray}
        />
      ),
    )
  );
};

export default Quote;
