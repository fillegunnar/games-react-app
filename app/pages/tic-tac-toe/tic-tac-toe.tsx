import { useState } from "react";
import { Square, type TCellValue } from "../../components/Square";

const TIC_TAC_TOE_BOARD_SIZE = 9;

export function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [board, setBoard] = useState<TCellValue[]>(() =>
    Array(TIC_TAC_TOE_BOARD_SIZE).fill(null)
  );
  const [hasWinner, setHasWinner] = useState<boolean>(false);

  function handleOnSquareClick(i: number) {
    const newBoard = [...board];
    if (!newBoard[i]) {
      newBoard[i] = currentPlayer;
      setBoard(newBoard);
      if (winnerExist(newBoard)) {
        setHasWinner(true);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  }

  function getStatusMessage() {
    if (hasWinner) {
      return `🥳🥳 We have a winner: ${currentPlayer} 🥳🥳`;
    }
    if (board.every((cell) => cell !== null)) {
      return "It's a draw!";
    }
    return `Current player: ${currentPlayer}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
      <p data-testid="status" className="text-xl mt-4">
        {getStatusMessage()}
      </p>
      {resetGameButton()}
      {renderGameBoard()}
    </div>
  );

  function renderGameBoard() {
    return <div data-testid="game-board" className="grid grid-cols-3 gap-4 mt-8">
      {board.map((value, i) => (
        <Square
          key={i}
          value={value}
          onSquareClick={() => handleOnSquareClick(i)} />
      ))}
    </div>;
  }

  function resetGameButton() {
    return (
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
        data-testid="reset-button"
        onClick={() => {
          setBoard(Array(TIC_TAC_TOE_BOARD_SIZE).fill(null));
          setCurrentPlayer("X");
          setHasWinner(false);
        }}
      >
        Reset
      </button>
    );
  }
}

function winnerExist(board: TCellValue[]): TCellValue {
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

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
