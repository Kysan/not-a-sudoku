import React, { Component } from "react";
import { checkIfFull, checkWin } from "../Utils/grid";
import Square from "./Square";

class Sudoku extends Component {
  state = {
    grid: [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ],
    playerIdTurn: 0,
    message: "Player turn 0",
    finish: false,
  };

  handleCaseClick = (x, y) => {
    // alert("clicked : ", x, y);
    let { grid, playerIdTurn } = this.state;

    // * la case est déjà joué
    if (grid[x][y] != -1) return;

    grid[x][y] = playerIdTurn;
    this.setState({ grid });

    // * check si victoire || grille complête

    if (checkWin(grid)) {
      this.setState({
        message: `Player ${playerIdTurn} won !!!`,
        finish: true,
      });
      return;
    }

    if (checkIfFull(grid)) {
      this.setState({ message: `Draw !!!`, finish: true });
      return;
    }

    // * change le tour si non
    playerIdTurn = playerIdTurn === 0 ? 1 : 0;
    this.setState({ message: `Player ${playerIdTurn} turn`, playerIdTurn });
  };

  componentDidMount = () => {
    this.ResetParty();
  };

  ResetParty = () => {
    this.setState({
      grid: [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
      ],
      playerIdTurn: 0,
      message: "Player turn 0",
      finish: false,
    });
  };

  render() {
    let { grid, message, finish } = this.state;
    return (
      <React.Fragment>
        <div id="message">{message}</div>

        <div id="board">
          {[0, 1, 2].map((x) => (
            <div className="row" key={x}>
              {[0, 1, 2].map((y) => (
                <Square
                  value={grid[x][y]}
                  onClick={() => {
                    this.handleCaseClick(x, y);
                  }}
                  key={y}
                />
              ))}
            </div>
          ))}
        </div>
        <div id="replay-message">
          {finish && <button onClick={this.ResetParty}>replay ?</button>}
        </div>
      </React.Fragment>
    );
  }
}

export default Sudoku;
