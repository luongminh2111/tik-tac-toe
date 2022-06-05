import React, { useState } from "react";

import Square from "../square/Square";
import Modal from "../modal/Modal";
import Button from "@mui/material/Button";

const Board = () => {
  const inititalBoardState = ["", "", "", "", "", "", "", "", ""];

  const [boardState, setBoardState] = useState(inititalBoardState);
  const [isXTurn, setIsXTurn] = useState(true);

  const gameOver = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleCheckIsGameOver = (boardState) => {
    // gameOver.forEach((gameOverCase) => {
    //   if (
    //     boardState[gameOverCase[0]] === boardState[gameOverCase[1]] &&
    //     boardState[gameOverCase[0]] === boardState[gameOverCase[2]] &&
    //     boardState[gameOverCase[0]] !== ""
    //   ) {
    //     setWinner(boardState[gameOverCase[0]]);
    //   }
    // });
    for (let i = 0; i < 8; i++) {
      const gameOverCase = gameOver[i];

      if (
        boardState[gameOverCase[0]] === boardState[gameOverCase[1]] &&
        boardState[gameOverCase[0]] === boardState[gameOverCase[2]] &&
        boardState[gameOverCase[0]] !== ""
      ) {
        return boardState[gameOverCase[0]];
      }
    }

    return false;
  };

  const handleSquareClick = (id) => {
    if (handleCheckIsGameOver(boardState) || boardState[id] !== "") {
      return;
    }
    const newBoardState = [...boardState];
    newBoardState[id] = isXTurn ? "X" : "O";

    setBoardState(newBoardState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
        textAlign: "center",
      }}
    >
      <div>
        <img
          src="https://play-lh.googleusercontent.com/FMFnJa_tF5fezIvFVkVSeSCyj_fDrUDr8UOvQLZi9H079Dg61J1SOx8LJAx0Faxx-4s"
          alt="logo"
          style={{ width: "200px", marginBottom: "20px" }}
        ></img>
        <div>
          <div style={{ display: "flex" }}>
            <Square
              squareState={boardState[0]}
              handleSquareClick={() => handleSquareClick(0)}
            />
            <Square
              squareState={boardState[1]}
              handleSquareClick={() => handleSquareClick(1)}
            />
            <Square
              squareState={boardState[2]}
              handleSquareClick={() => handleSquareClick(2)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Square
              squareState={boardState[3]}
              handleSquareClick={() => handleSquareClick(3)}
            />
            <Square
              squareState={boardState[4]}
              handleSquareClick={() => handleSquareClick(4)}
            />
            <Square
              squareState={boardState[5]}
              handleSquareClick={() => handleSquareClick(5)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Square
              squareState={boardState[6]}
              handleSquareClick={() => handleSquareClick(6)}
            />
            <Square
              squareState={boardState[7]}
              handleSquareClick={() => handleSquareClick(7)}
            />
            <Square
              squareState={boardState[8]}
              handleSquareClick={() => handleSquareClick(8)}
            />
          </div>
        </div>
        {!handleCheckIsGameOver(boardState) ? (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <div>Next Player: {isXTurn ? "X" : "O"}</div>
          </div>
        ) : (
          <div>
            <Modal winner={handleCheckIsGameOver(boardState)} />
            <Button
              onClick={() => {
                window.location.reload();
              }}
              variant="outlined"
              sx={{ marginTop: "20px" }}
            >
              Start New Game
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
