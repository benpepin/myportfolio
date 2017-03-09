import React, { Component } from 'react';
import './App.css';
class Piece extends Component {

  maybeShow() {
    let projectLink = this.props.projectLink
    if (this.props.isShowing) {
      return (
        <div className="h2">
          <h2>Hey Thanks!</h2>
          <a href={projectLink}> Read about the case study here</a>

        </div>
      )
    } else {
      return
    }

  }

  render() {
    let imageSrc = this.props.imageSrc

    return (

      <div className="Piece">
        <img src={imageSrc} />
        { this.maybeShow() }


        <div className="Buttongood">
          I like it!
        </div>

        <div className="Buttonbad">
          I hate it!
        </div>





      </div>

    );
  }
}

export default Piece;
