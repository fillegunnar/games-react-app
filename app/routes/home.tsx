import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Game App" },
    { name: "description", content: "Welcome to the Game App!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
