import React, { useEffect, useState } from "react";
import styles from "../../styles/gameBoard.module.css";

const GameBoard = ({ selectedWeapon, player1Name, player2Name }) => {
  const [currentPlayer, setCurrentPlayer] = useState(selectedWeapon);
  
  // Helper function to get player name based on current symbol
  const getCurrentPlayerName = (symbol) => {
    if (symbol === selectedWeapon) {
      return player1Name || "Player 1";
    } else {
      return player2Name || "Player 2";
    }
  };
  
  const [title, setTitle] = useState(`It's ${getCurrentPlayerName(currentPlayer)}'s turn!`);
  const [clickCount, setClickCount] = useState(0);
  const [isGameOn, setIsGameOn] = useState(true);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isGameOver, setIsGameOver] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (currentBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setIsGameOn(false);
        setIsGameOver(true);
        if (currentBoard[a]) {
          const winnerName = getCurrentPlayerName(currentBoard[a]);
          setTitle(`${winnerName} wins!`);
          alert(`${winnerName} wins!`);
          return currentBoard[a];
        }
      }
    }
    if (clickCount >= 8) {
      let isDraw = true;
      for (let cell of currentBoard) {
        if (cell === "") {
          isDraw = false;
          break;
        }
      }
      if (isDraw) {
        console.log("Draw check:", clickCount);
        setIsGameOn(false);
        setIsGameOver(true);
        setTitle("It's a draw!");
      }
    }
    return null;
  };

  const putMark = (e) => {
    if (isGameOn && !e.target.textContent) {
      const index = parseInt(e.target.id);
      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setClickCount((prev) => prev + 1);

      checkWinner(newBoard);
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer(selectedWeapon);
    setTitle(`It's ${getCurrentPlayerName(selectedWeapon)}'s turn!`);
    setClickCount(0);
    setIsGameOn(true);
    setIsGameOver(false);
  };

  useEffect(() => {
    if (isGameOn) {
      setTitle(`It's ${getCurrentPlayerName(currentPlayer)}'s turn!`);
    }
  }, [currentPlayer, isGameOn, player1Name, player2Name]);

  return (
    <div>
      <div className="row py-3">
        <div className="col text-center">
          <h2>{title}</h2>
          {isGameOver && <button onClick={restartGame}>Restart Game</button>}
        </div>
      </div>
      <div>
        <div className="row d-flex border-bottom ">
          <div
            onClick={putMark}
            id="0"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{ width: "200px", height: "200px" }}
          >
            {board[0]}
          </div>
          <div
            onClick={putMark}
            id="1"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
              width: "200px",
              height: "200px",
            }}
          >
            {board[1]}
          </div>
          <div
            onClick={putMark}
            id="2"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{ width: "200px", height: "200px" }}
          >
            {board[2]}
          </div>
        </div>

        <div className="row border-bottom">
          <div
            onClick={putMark}
            id="3"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{ width: "200px", height: "200px" }}
          >
            {board[3]}
          </div>
          <div
            onClick={putMark}
            id="4"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
              width: "200px",
              height: "200px",
            }}
          >
            {board[4]}
          </div>
          <div
            onClick={putMark}
            id="5"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{ width: "200px", height: "200px" }}
          >
            {board[5]}
          </div>
        </div>
        <div className="row">
          <div
            onClick={putMark}
            id="6"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{ width: "200px", height: "200px" }}
          >
            {board[6]}
          </div>
          <div
            onClick={putMark}
            id="7"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
              width: "200px",
              height: "200px",
            }}
          >
            {board[7]}
          </div>
          <div
            onClick={putMark}
            id="8"
            className={`${styles["weapon-mark"]} col-4 p-5 border-white text-center`}
            style={{ width: "200px", height: "200px" }}
          >
            {board[8]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
