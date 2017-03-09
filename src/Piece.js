import React, { Component } from 'react';

class Piece extends Component {
  maybeShow() {
    let projectLink = this.props.projectLink
    if (this.props.isShowing) {
      return (
        <div>
          <a href={projectLink}> Read about the case study here</a>
          <p>Hey Thanks!</p>
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
        <button>I like it!</button>
        <button>I hate it!</button>
        { this.maybeShow() }

      </div>

    );
  }
}

export default Piece;
