import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const PieChartComponent = ({ entries }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(entries?.slice(5, 11));
  }, [entries]); 


  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="unique_count"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          <Cell fill="#E5D283" />
          <Cell fill="#64C2A6" />
          <Cell fill="#AADEA7" />
          <Cell fill="#E6F69D" />
          <Cell fill="#61A3BA" />
          <Cell fill="#FFC436" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
