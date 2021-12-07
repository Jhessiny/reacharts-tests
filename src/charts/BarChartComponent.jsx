import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Segunda",
    contatos: 4000,
  },
  {
    name: "Terça",
    contatos: 3000,
  },
  {
    name: "Quarta",
    contatos: 2000,
  },
  {
    name: "Quinta",
    contatos: 2780,
  },
  {
    name: "Sexta",
    contatos: 1890,
  },
  {
    name: "Sábado",
    contatos: 2390,
  },
  {
    name: "Domingo",
    contatos: 3490,
  },
];

export default function BarChartComponent() {
  return (
    <ResponsiveContainer width="50%" aspect={2}>
      <BarChart
        width={100}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={30}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="contatos" fill="#8884d8" radius={[20, 20, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
}
