import { useState } from "react";

function calculateDraw(squares) {
  for (let square of squares) {
    if (!square) {
      return false;
    }
  }
  return true;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(squares);

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, moves }) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleClick(i) {
    if (isCompleted) {
      alert("[Game Completed] !! Click `OK` to Restart !!");
      window.location.reload();
    }

    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (!xIsNext) {
      nextSquares[i] = "O";
    } else {
      nextSquares[i] = "X";
    }

    // setSquares(nextSquares);
    onPlay(nextSquares);

    if (
      calculateWinner(nextSquares) ||
      calculateDraw(nextSquares) ||
      moves == 9
    ) {
      setIsCompleted(true);
    }
  }

  const winner = calculateWinner(squares);
  let status = null;

  if (winner) {
    status = (
      <div>
        <h3>Status</h3>
        <p>The winner is: {winner}</p>
      </div>
    );
  } else if (calculateDraw(squares)) {
    status = (
      <div>
        <h3>Status</h3>
        <p>It's Draw</p>
      </div>
    );
  } else {
    status = (
      <div>
        <h3>Status</h3>
        <p>Next player is: {xIsNext ? "X" : "O"}</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="game-status">{status}</div>
        <div className="button-container">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className="game-history">
          <h3>History</h3>
          <p>{moves}</p>
        </div>
      </div>
    </>
  );
}

export default Board;
