"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
export default function AdminPage() {
  const stats = [
    {
      title: "Employees Completed Goals",
      value: "18 / 25",
    },
    {
      title: "Pending Approvals",
      value: "7",
    },
    {
      title: "Quarterly Check-ins Completed",
      value: "72%",
    },
    {
      title: "Locked Goal Sheets",
      value: "15",
    },
  ];
  const data = [
  { name: "Completed", value: 72 },
  { name: "Pending", value: 28 },
];

const COLORS = ["#22c55e", "#facc15"];
const exportReport = () => {
  const csvContent = `
Employee,Status,Progress
Rahul Sharma,Completed,92%
Priya Verma,Pending,68%
Amit Joshi,Completed,100%
  `;

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    "achievement-report.csv"
  );

  link.click();
};

  return (
    <div className="min-h-screen bg-slate-100 flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mb-8">
          Organization-wide performance visibility
        </p>
        <Button
  className="mb-6"
  onClick={exportReport}
>
  Export Achievement Report
</Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h2 className="text-lg text-gray-500 mb-2">
                  {stat.title}
                </h2>

                <p className="text-4xl font-bold">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-8">
  <CardContent className="p-6">
    <h2 className="text-2xl font-semibold mb-6">
      Check-in Completion Analytics
    </h2>

    <div className="w-full h-[350px]">
      <ResponsiveContainer width="99%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </CardContent>
</Card>
      </div>
    </div>
   </div>
  );
}