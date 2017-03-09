import React, { Component } from 'react';
import './App.css';
import Piece from './Piece.js';

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>Ben Designed This...</h1>
        <Piece
          imageSrc="http://placekitten.com/300/500"
          projectLink="http://www.benpepin.com/comixtoon"
          isShowing={true}
        />
        <Piece
          imageSrc="http://placekitten.com/300/500"
          projectLink="http://www.benpepin.com"
          isShowing={false}
        />
      </div>

    );
  }
}

export default App;
//
//"http://www.benpepin.com/comixtoon"
