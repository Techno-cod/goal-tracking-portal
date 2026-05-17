"use client";
import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabase";

export default function ManagerPage() {
  const router = useRouter();
  const [goals, setGoals] = useState<any[]>([]);

useEffect(() => {
  const role = localStorage.getItem("role");
  

  if (role !== "Manager") {
    router.push("/");
  }
}, []);


  

  const handleApprove = async (index: number) => {
  const goal = goals[index];

  const { error } = await supabase
    .from("goals")
    .update({ status: "approved" })
    .eq("id", goal.id);

  if (error) {
    console.error(error);
    alert("Failed to approve goal");
    return;
  }

  fetchGoals();
};

  const handleReturn = async (index: number) => {
  const goal = goals[index];

  const { error } = await supabase
    .from("goals")
    .update({ status: "returned" })
    .eq("id", goal.id);

  if (error) {
    console.error(error);
    alert("Failed to return goal");
    return;
  }

  fetchGoals();
};

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...goals];
    updated[index] = { ...updated[index], [field]: value };
    setGoals(updated);
  };
  useEffect(() => {
  fetchGoals();
}, []);

const fetchGoals = async () => {
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  setGoals(data || []);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex">
      <Sidebar />
      <div className="flex-1 ml-72 p-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight text-white">
              Manager Dashboard
            </h1>
            <p className="text-slate-400 mt-1 text-sm">
              Review, edit and approve employee goal submissions
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mb-8">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Total Submitted</p>
              <p className="text-4xl font-black text-white mt-2">{goals.length}</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Pending Review</p>
              <p className="text-4xl font-black text-amber-400 mt-2">
                {goals.filter(g => g.status === "pending").length}
              </p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Approved</p>
              <p className="text-4xl font-black text-emerald-400 mt-2">
                {goals.filter(g => g.status === "Approved").length}
              </p>
            </div>
          </div>

          {/* Goal Cards */}
          <div className="space-y-5">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1 space-y-4">

                    {/* Title + badges */}
                    <div>
                      <h2 className="text-xl font-bold text-white">{goal.title}</h2>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        <span className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full">
                          {goal.thrust_area}
                        </span>
                        <span className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full">
                          {goal.uom}
                        </span>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          goal.status === "approved" ? "bg-emerald-500/20 text-emerald-400" :
                          goal.status === "returned" ? "bg-red-500/20 text-red-400" :
                          "bg-amber-500/20 text-amber-400"
                        }`}>
                          {goal.status}
                        </span>
                      </div>
                    </div>

                    {/* Employee */}
                    <p className="text-slate-400 text-sm">
                      <span className="text-slate-300 font-medium">Employee:</span> {goal.employee}
                    </p>

                    {/* Inline editable fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                          Target
                        </p>
                        <input
                          className="w-full bg-slate-900/60 border border-slate-600 rounded-lg p-2 text-white text-sm focus:border-blue-500 outline-none"
                          value={goal.target}
                          onChange={(e) => handleChange(index, "target", e.target.value)}
                        />
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                          Weightage %
                        </p>
                        <input
                          type="number"
                          min={10}
                          max={100}
                          className="w-full bg-slate-900/60 border border-slate-600 rounded-lg p-2 text-white text-sm focus:border-blue-500 outline-none"
                          value={goal.weightage}
                          onChange={(e) => handleChange(index, "weightage", e.target.value)}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Action buttons */}
                  {goal.status === "pending" && (
                    <div className="flex flex-col gap-3 min-w-fit">
                      <Button
                        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-6"
                        onClick={() => handleApprove(index)}
                      >
                        Approve
                      </Button>
                      <Button
                        className="bg-slate-700 hover:bg-red-900/50 text-red-400 border border-red-500/30 rounded-xl px-6"
                        onClick={() => handleReturn(index)}
                      >
                        Return for Rework
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}