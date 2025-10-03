import type { Route } from './+types/tic-tac-toe';
import { TicTacToe } from '~/tic-tac-toe/tic-tac-toe';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tic Tac Toe - Game App" },
    { name: "description", content: "Play Tic Tac Toe!" },
  ];
}

export default function TicTacToeRoute() {
  return <TicTacToe />;
}