import type { Route } from "./+types/test";
import { Chart } from "../chart/chart";

'use client'; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Highcharts Test" },
    { name: "description", content: "Loading Highcharts" },
  ];
}

export default function Test() {
  return <Chart />;
}
