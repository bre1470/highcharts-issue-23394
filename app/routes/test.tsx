import type { Route } from "./+types/home";
import { Chart } from "../chart/chart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Test() {
  return <Chart />;
}
