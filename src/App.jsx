import React, { Component } from "react";
import Sudoku from "./Components/Sudoku";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sudoku />
      </React.Fragment>
    );
  }
}

export default App;
