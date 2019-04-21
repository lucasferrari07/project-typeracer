import React from 'react';
import './QuoteLetter.css';

const QuoteLetter = ({ offset, quoteLetter, intervals }) => {
  const isWrong = offset >= intervals.get('incorrect')[0] && offset < intervals.get('incorrect')[1];
  const isTyped = offset >= intervals.get('typed')[0] && offset < intervals.get('typed')[1];
  let letterClass = '';
  if (isTyped) {
    letterClass = 'right-letter';
  } else if (isWrong) {
    letterClass = 'wrong-letter';
  }
  return <span className={letterClass}>{quoteLetter}</span>;
};

export default QuoteLetter;
