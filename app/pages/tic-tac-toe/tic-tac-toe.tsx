import { useState } from "react";

const TIC_TAC_TOE_BOARD_SIZE = 9;

type TSquareProps = {
  id: number;
  onSquareClick: () => "X" | "O";
};

function Square({ id, onSquareClick }: TSquareProps) {
  const [value, setValue] = useState<string>("");

  function handleOnClick() {
    if (!value) {
      const newValue = onSquareClick();
      setValue(newValue);
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className="w-16 h-16 border border-gray-400 flex items-center justify-center text-2xl font-bold"
    >
      {value}
    </button>
  );
}

export function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const board = Array.from({ length: TIC_TAC_TOE_BOARD_SIZE }, (_, i) => (
    <Square id={i} onSquareClick={onSquareClick} />
  ));

  function onSquareClick(): "X" | "O" {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    return currentPlayer;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
      <p className="text-xl mt-4">Current player: {currentPlayer}</p>
      <div className="grid grid-cols-3 gap-4 mt-8">{board}</div>
    </div>
  );
}
