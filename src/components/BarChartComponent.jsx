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
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={entries}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="space_count" fill="#29ADB2" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
