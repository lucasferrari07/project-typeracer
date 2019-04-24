import React from 'react';
import QuoteWord from './QuoteWord';

// import { zipWith } from 'lodash';

const Quote = ({
  quoteArray, typedText, currentWord, intervals,
}) => (
  quoteArray.map(
    (word, wordIndex) => (
      <QuoteWord
        key={wordIndex.toString()}
        word={word}
        isCurrent={wordIndex === currentWord}
        typedText={typedText}
        intervals={intervals}
      />
    ),
  )
);

export default Quote;
