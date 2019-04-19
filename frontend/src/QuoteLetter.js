import React from 'react';
import './QuoteLetter.css';

const QuoteLetter = ({ typedLetter, quoteLetter }) => {
  let letterClass = '';
  if (typeof typedLetter === 'undefined') {
    letterClass = '';
  } else if (typedLetter === quoteLetter) {
    letterClass = 'right-letter';
  } else {
    letterClass = 'wrong-letter';
  }
  return <span className={letterClass}>{quoteLetter}</span>;
};

export default QuoteLetter;
