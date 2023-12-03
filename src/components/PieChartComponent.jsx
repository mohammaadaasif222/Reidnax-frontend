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
    setData(entries?.slice(5,11));
  }, [entries]); // Update data when entries change

  const getRandomColor = () => {
    const letters = "F3F3F329ADB20766ADC5E898";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColorsMap = () => {
    const colorsMap = {};
    data?.forEach((entry) => {
      if (!colorsMap[entry.topic]) {
        colorsMap[entry.topic] = getRandomColor();
      }
    });
    return colorsMap;
  };

  const colorsMap = generateColorsMap();

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
          {data?.map((entry, index) => (
            <Cell key={`${index+ new Date()}`} fill={colorsMap[entry.topic]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
