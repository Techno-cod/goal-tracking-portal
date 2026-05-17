"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Sidebar from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "Admin") {
      router.push("/");
    }
  }, []);

  
  const stats = [
    { title: "Employees Completed Goals", value: "18 / 25", color: "text-white" },
    { title: "Pending Approvals", value: "7", color: "text-amber-400" },
    { title: "Check-ins Completed", value: "72%", color: "text-emerald-400" },
    { title: "Locked Goal Sheets", value: "15", color: "text-blue-400" },
  ];

  const data = [
    { name: "Completed", value: 72 },
    { name: "Pending", value: 28 },
  ];

  const COLORS = ["#22c55e", "#facc15"];

  const exportReport = () => {
    const csvContent = `Employee,Status,Progress\nRahul Sharma,Completed,92%\nPriya Verma,Pending,68%\nAmit Joshi,Completed,100%`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "achievement-report.csv");
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex">
      <Sidebar />
      <div className="flex-1 ml-72 p-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white">
                Admin Dashboard
              </h1>
              <p className="text-slate-400 mt-1 text-sm">
                Organisation-wide performance visibility · FY 2025
              </p>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5"
              onClick={exportReport}
            >
              Export CSV Report
            </Button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6"
              >
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                  {stat.title}
                </p>
                <p className={`text-4xl font-black mt-2 ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-6">
              Check-in Completion Analytics
            </h2>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={100}
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex gap-6 justify-center mt-4">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: COLORS[index] }}
                  />
                  <span className="text-slate-400 text-sm">
                    {entry.name}: {entry.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}