import React, { Component } from 'react';
import './App.css';
import Piece from './Piece.js';

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>Ben Designed This...</h1>
        <Piece
          imageSrc="https://static1.squarespace.com/static/55b3be84e4b07dd5b896634d/t/56f9a473b654f9c06ed434e4/1459201446427/"
          projectLink="http://www.benpepin.com/comixtoon"
          isShowing={true}
        />
        <Piece
          imageSrc="https://static1.squarespace.com/static/55b3be84e4b07dd5b896634d/56cbe85ecf80a1fc057b688b/56cbe860c2ea518471deaf86/1456203891649/Discover.png?format=300w"
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
