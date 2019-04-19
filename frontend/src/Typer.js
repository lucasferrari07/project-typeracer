import React from 'react';

const Typer = ({ onInputChange }) => {
  const handleChange = e => onInputChange(e.target.value);
  return (<input type="text" onChange={handleChange} />);
};

export default Typer;
