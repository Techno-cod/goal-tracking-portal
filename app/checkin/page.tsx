"use client";
import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CheckinPage() {
  const [achievement, setAchievement] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [managerComment, setManagerComment] = useState("");
  const target = 1000000;

  const progress = achievement
    ? Math.min((Number(achievement.replace(/,/g, "")) / target) * 100, 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex">
      <Sidebar />
      <div className="flex-1 ml-72 p-10">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight text-white">
              Quarterly Check-in
            </h1>
            <p className="text-slate-400 mt-1 text-sm">
              Q2 · October Window · Update your progress
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Planned Target
              </p>
              <p className="text-3xl font-black text-white mt-2">₹10,00,000</p>
              <p className="text-slate-500 text-xs mt-1">Revenue & Growth</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Actual Achievement
              </p>
              <p className={`text-3xl font-black mt-2 ${
                progress >= 100 ? "text-emerald-400" :
                progress >= 50 ? "text-amber-400" : "text-slate-300"
              }`}>
                {achievement ? `₹${Number(achievement.replace(/,/g,"")).toLocaleString()}` : "₹0"}
              </p>
              <div className="mt-3">
                <Progress value={progress} className="h-2" />
                <p className="text-slate-500 text-xs mt-1">{progress.toFixed(1)}% achieved</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 space-y-5">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Actual Achievement
              </p>
              <Input
                placeholder="Enter your achievement value"
                value={achievement}
                onChange={(e) => setAchievement(e.target.value)}
                className="bg-slate-900/60 border-slate-600 text-white placeholder:text-slate-500 rounded-lg"
              />
            </div>

            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Status
              </p>
              <select
                className="w-full bg-slate-900/60 border border-slate-600 rounded-lg p-2 text-white text-sm outline-none focus:border-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Not Started</option>
                <option>On Track</option>
                <option>Completed</option>
              </select>
            </div>

            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Manager Check-in Comment
              </p>
              <textarea
                className="w-full bg-slate-900/60 border border-slate-600 rounded-lg p-3 text-white text-sm placeholder:text-slate-500 outline-none focus:border-blue-500 resize-none"
                rows={4}
                placeholder="Enter manager feedback for this quarter..."
                value={managerComment}
                onChange={(e) => setManagerComment(e.target.value)}
              />
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 text-base font-semibold"
              onClick={() => alert("Q2 Check-in submitted successfully!")}
            >
              Submit Q2 Check-in
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}