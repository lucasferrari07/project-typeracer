import React, { useRef, useEffect } from 'react';
import './Typer.css';

const handleInputChangeWith = fn => e => fn(e.target.value);
const Typer = ({
  expectedWord, onInputChange, onWordExact, maxLength,
}) => {
  const textInput = useRef();
  useEffect(() => {
    textInput.current.focus();
  });
  const handleInputChange = handleInputChangeWith((typed) => {
    if (typed === expectedWord) {
      textInput.current.value = '';
      onWordExact();
    }
    onInputChange(textInput.current.value);
  });
  return (<input ref={textInput} type="text" onChange={handleInputChange} maxLength={maxLength} />);
};

export default Typer;
