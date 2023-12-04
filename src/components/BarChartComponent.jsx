import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const BarChartComponent = ({entries}) => {

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={entries?.slice(0, entries.length/2)}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="space_count" fill="#ffee65" />
        <Bar dataKey="unique_count" fill="#beb9db" />
        <Bar dataKey="max_str_length" fill="#fdcce5" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
