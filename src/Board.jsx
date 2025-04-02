function Square() {
  return <button className="square"></button>;
}

function Board() {
  return (
    <>
      <div className="container">
        <div className="game-status">Status</div>
        <div className="button-container">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div className="game-history">History</div>
      </div>
    </>
  );
}

export default Board;
