import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'They don\'t know that we know they know we know.',
      typedText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const typedText = event.target.value;
    this.setState({ typedText: typedText });
  }

  getDisplayQuote() {
    const quoteArray = this.state.quote.split('');
    const typedArray = this.state.typedText.split('');
    return (
      quoteArray.map((letter, index) => {
        if (!(index in typedArray)) {
          return letter;
        }
        if (letter === typedArray[index]) {
          return <span className="right-letter">{letter}</span>;
        }
        return <span className="wrong-letter">{letter}</span>;
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Typeracer</h1>
        <form>
          <p>{this.getDisplayQuote()}</p>
          <input type='text' onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default App;
