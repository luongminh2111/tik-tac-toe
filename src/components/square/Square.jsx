import React from "react";

const Square = ({ squareState, handleSquareClick }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100px",
        height: "100px",
        border: "2px solid black",
        margin: "10px",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
      }}
      onClick={handleSquareClick}
    >
      <div>{squareState}</div>
    </div>
  );
};

export default Square;
