import React, { Component } from "react";

class Square extends Component {
  renderSymbol = (value) => {
    if (value === 1) {
      return "X";
    } else if (value === 0) {
      return "O";
    } else {
      return "?";
    }
  };

  render() {
    let { value, onClick } = this.props;
    return (
      <button className={Square} onClick={onClick} className="square">
        {this.renderSymbol(value)}
      </button>
    );
  }
}

export default Square;
