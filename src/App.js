import React, { Component } from 'react';
import './App.css';
import Piece from './Piece.js';

const projects = [
  {
    src: "https://static1.squarespace.com/static/55b3be84e4b07dd5b896634d/t/56f9a473b654f9c06ed434e4/1459201446427/",
  },
  {
    src: "https://static1.squarespace.com/static/55b3be84e4b07dd5b896634d/56cbe85ecf80a1fc057b688b/56cbe860c2ea518471deaf86/1456203891649/Discover.png?format=300w",
  },
  {
    src: "http://placecorgi.com/250",
  },
]

function pieceFromProject(project) {
  return (<Piece
    imageSrc={project.src}
    projectLink="http://www.benpepin.com/comixtoon"
    isShowing={true}
  />)
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { numberShowing: 1 };
  }

  showAdditional() {
    this.setState({
      numberShowing: this.state.numberShowing + 1
    });
  }

  showProjects() {
    console.log("showing projects")
    console.log(this)
    return (
      projects.slice(0, this.state.numberShowing).map((project) => pieceFromProject(project))
    )
  }

  render() {
    return (

      <div className="App" >
        <h1 onClick={this.showAdditional.bind(this)}>Ben Designed This...</h1>
        <div className="projects">
          {this.showProjects()}
        </div>
        <h1>{this.state.numberShowing}</h1>
      </div>

    );
  }
}

export default App;
//
//"http://www.benpepin.com/comixtoon"
