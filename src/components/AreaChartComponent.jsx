import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = ({entries}) => {
 
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={entries}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="min_str_length" fill="#8884d8" stroke="#8884d8" />
        <Area type="monotone" dataKey="avg_str_length" fill="#64C2A6" stroke="#8884d8" />
        <Area type="monotone" dataKey="unique_percent" fill="#288EEB" stroke="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
