import BarChartComponent from "./charts/BarChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import "./App.css";
import { Pie, PieChart } from "recharts";

function App() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  return (
    <div className="App">
      <BarChartComponent />
      <PieChartComponent />
    </div>
  );
}

export default App;
