import '../styles/App.css';
import React, { Component } from 'react';
import News from './news/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          KYND - NEWS
        </header>
        <News />
      </div>
    );
  }
}

export default App;
