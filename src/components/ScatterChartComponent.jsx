import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ScatterChartComponent = ({ entries }) => {
  const data = entries.map((entry, index) => ({
    x: entry.likelihood,
    y: entry.relevance,
    key: `point-${index}-${entry.likelihood}-${entry.relevance}`, // Generating a more unique key
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Likelihood" />
        <YAxis type="number" dataKey="y" name="Relevance" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Data" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartComponent;
