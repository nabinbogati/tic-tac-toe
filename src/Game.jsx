import { useState } from "react";
import Board from "./Board.jsx";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[currentMove];
  const [isCompleted, setIsCompleted] = useState(false);

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = "Go to Move #" + move;
    } else {
      description = "Go to Start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    if (isCompleted) {
      return;
    }
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  return (
    <>
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
        moves={moves}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </>
  );
}

export default Game;
