import React from "react";
import "./Banner.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { AssignmentNo: "Assignment: 1", marks: 57 },
    { AssignmentNo: "Assignment: 2", marks: 60 },
    { AssignmentNo: "Assignment: 3", marks: 58 },
    { AssignmentNo: "Assignment: 4", marks: 60 },
    { AssignmentNo: "Assignment: 5", marks: 38 },
    { AssignmentNo: "Assignment: 6", marks: 51 },
    { AssignmentNo: "Assignment: 7", marks: 60 },
    { AssignmentNo: "Assignment: 8", marks: 58 },
  ];

  return (
    <div>
      <div className="banner">
        {" "}
        <h1 className=" text-center text-4xl font-bold ">
          Assignment Analytics
        </h1>
      </div>
      <AreaChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="AssignmentNo" />
        <YAxis />
        <Tooltip></Tooltip>
        <CartesianGrid></CartesianGrid>
        <ResponsiveContainer></ResponsiveContainer>
        <Area type="monotone" dataKey="marks" stroke="black" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
