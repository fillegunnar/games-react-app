import { Welcome } from "../pages/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Game App" },
    { name: "description", content: "Welcome to the Game App!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
