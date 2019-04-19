import React from 'react';
import QuoteLetter from './QuoteLetter';
// import { zipWith } from 'lodash';

const Quote = ({ quoteText, typedText }) => {
  const quoteArray = quoteText.split('');
  const typedArray = typedText.split('');
  return (
    // zipWith()
    // eslint-disable-next-line max-len
    quoteArray.map((letter, index) => <QuoteLetter key={index.toString()} quoteLetter={letter} typedLetter={typedArray[index]} />)
  );
};

export default Quote;
