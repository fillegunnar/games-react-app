
export type TCellValue = null | "X" | "O";

export type TSquareProps = {
  value?: TCellValue;
  onSquareClick: () => void;
};

export function Square({ value, onSquareClick }: TSquareProps) {
  return (
    <button
      data-testid="square"
      onClick={onSquareClick}
      className="w-16 h-16 border border-gray-400 flex items-center justify-center text-2xl font-bold hover:cursor-pointer"
    >
      {value}
    </button>
  );
}
