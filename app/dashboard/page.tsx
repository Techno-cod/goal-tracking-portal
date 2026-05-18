"use client";
import Sidebar from "@/components/ui/Sidebar";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "../supabase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

useEffect(() => {
  const role = localStorage.getItem("role");
  if (role !== "Employee") {
    router.push("/");
  }
}, []);

  useEffect(() => {
  fetchFeedback();
}, []);

const fetchFeedback = async () => {
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("status", "returned")
    .eq("employee", "Rahul Sharma");

  if (error) {
    console.error(error);
    return;
  }

  setFeedbacks(data || []);
  if (data && data.length > 0) {
  setLatestStatus(data[0].status);
}
};
  const [goals, setGoals] = useState([
    { title: "", target: "", weightage: "", thrustArea: "", uom: "" },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [latestStatus, setLatestStatus] = useState("pending");

  const addGoal = () => {
    if (goals.length >= 8) { alert("Maximum 8 goals allowed"); return; }
    setGoals([...goals, { title: "", target: "", weightage: "", thrustArea: "", uom: "" }]);
  };

  const removeGoal = (index: number) => {
    if (goals.length === 1) return;
    setGoals(goals.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...goals];
    updated[index] = { ...updated[index], [field]: value };
    setGoals(updated);
  };

  const totalWeightage = goals.reduce((sum, g) => sum + Number(g.weightage || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex">
      <Sidebar />
      <div className="flex-1 ml-72 p-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight text-white">
              Employee Dashboard
            </h1>
            <p className="text-slate-400 mt-1 text-sm">
              Create and manage your goals for FY 2025
            </p>
          </div>

          {/* Stat Cards — all identical style */}
          <div className="grid grid-cols-3 gap-5 mb-8">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Goals Created
              </p>
              <p className="text-4xl font-black text-white mt-2">{goals.length}</p>
              <p className="text-slate-500 text-xs mt-1">of 8 maximum</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Total Weightage
              </p>
              <p className={`text-4xl font-black mt-2 ${
                totalWeightage === 100 ? "text-emerald-400" :
                totalWeightage > 100 ? "text-red-400" : "text-amber-400"
              }`}>
                {totalWeightage}%
              </p>
              <p className="text-slate-500 text-xs mt-1">must equal 100%</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Submission Status
              </p>
              <p className={`text-4xl font-black mt-2 ${
                submitted ? "text-emerald-400" : "text-slate-300"
              }`}>
                {submitted ? "Submitted" : "Draft"}
              </p>
              <p className="text-slate-500 text-xs mt-1">
                {submitted ? "awaiting approval" : "not yet submitted"}
              </p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
  <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
    Latest Workflow Status
  </p>

  <p
    className={`text-3xl font-black mt-2 ${
      latestStatus === "approved"
        ? "text-emerald-400"
        : latestStatus === "returned"
        ? "text-red-400"
        : "text-amber-400"
    }`}
  >
    {latestStatus}
  </p>

  <p className="text-slate-500 text-xs mt-1">
    latest manager action
  </p>
</div>
          </div>
          {feedbacks.length > 0 && (
  <div className="mb-4 bg-red-500/5 border border-red-500/10 rounded-xl p-4">
   <h2 className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-3">
     Returned Goals
   </h2>

    <div className="space-y-3">
      {feedbacks.map((goal, index) => (
        <div
          key={index}
          className="bg-slate-900/60 rounded-xl p-4 border border-slate-700"
        >
          <p className="text-white font-semibold">
            {goal.title}
          </p>

          <p className="text-slate-300 text-sm mt-1">
            {goal.feedback}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

          {/* Goal Sheet */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">Goal Sheet</h2>
                <p className="text-slate-400 text-xs mt-1">
                  Min 10% per goal · Max 8 goals · Total must equal 100%
                </p>
              </div>
              {!submitted && (
                <Button
                  onClick={addGoal}
                  disabled={goals.length >= 8}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4"
                >
                  + Add Goal
                </Button>
              )}
            </div>

            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
  key={index}
  className="bg-slate-900/80 border border-slate-600/60 rounded-2xl p-6 shadow-lg"
>
  <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-700/50">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-black">
        {index + 1}
      </div>
      <span className="text-white text-sm font-bold">
        Goal {index + 1}
      </span>
      {goal.thrustArea && (
        <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">
          {goal.thrustArea}
        </span>
      )}
    </div>
    {!submitted && goals.length > 1 && (
      <button
        onClick={() => removeGoal(index)}
        className="text-red-400 text-xs hover:text-red-300 transition-colors bg-red-500/10 px-3 py-1 rounded-lg"
      >
        Remove
      </button>
    )}
  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Goal Title *"
                      disabled={submitted}
                      value={goal.title}
                      onChange={(e) => handleChange(index, "title", e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 rounded-lg"
                    />
                    <select
                      className="bg-slate-800 border border-slate-600 rounded-lg p-2 text-white text-sm"
                      value={goal.thrustArea}
                      disabled={submitted}
                      onChange={(e) => handleChange(index, "thrustArea", e.target.value)}
                    >
                      <option value="">Select Thrust Area *</option>
                      <option>Revenue & Growth</option>
                      <option>Cost Efficiency</option>
                      <option>Customer Experience</option>
                      <option>Operational Excellence</option>
                      <option>People & Culture</option>
                      <option>Innovation & Technology</option>
                      <option>Safety & Compliance</option>
                      <option>Sustainability</option>
                    </select>

                    <Input
                      placeholder="Target (e.g. 20, 2025-12-31)"
                      disabled={submitted}
                      value={goal.target}
                      onChange={(e) => handleChange(index, "target", e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 rounded-lg"
                    />
                    <select
                      className="bg-slate-800 border border-slate-600 rounded-lg p-2 text-white text-sm"
                      value={goal.uom}
                      disabled={submitted}
                      onChange={(e) => handleChange(index, "uom", e.target.value)}
                    >
                      <option value="">Select UoM *</option>
                      <option value="min">Min – Higher is better</option>
                      <option value="max">Max – Lower is better</option>
                      <option value="timeline">Timeline – Date based</option>
                      <option value="zero">Zero – Zero = Success</option>
                    </select>

                    <div className="col-span-2">
                      <Input
                        placeholder="Weightage % * (min 10%)"
                        type="number"
                        disabled={submitted}
                        value={goal.weightage}
                        onChange={(e) => handleChange(index, "weightage", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 rounded-lg"
                      />
                      {Number(goal.weightage) > 0 && Number(goal.weightage) < 10 && (
                        <p className="text-red-400 text-xs mt-1">Minimum weightage is 10%</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weightage Progress */}
            <div className="mt-6 bg-slate-900/40 rounded-xl p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300 font-medium">
                  Total Weightage: {totalWeightage}%
                </span>
                <span className={totalWeightage === 100 ? "text-emerald-400 font-semibold" : "text-amber-400"}>
                  {totalWeightage === 100 ? "✓ Ready to submit" : `${100 - totalWeightage}% remaining`}
                </span>
              </div>
              <Progress value={Math.min(totalWeightage, 100)} className="h-2" />
            </div>

            <Button
              className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 text-base font-semibold disabled:opacity-40"
              disabled={totalWeightage !== 100 || submitted}
              onClick={async () => {
  const formattedGoals = goals.map((goal) => ({
    employee: "Rahul Sharma",
    employee_id: "dc064aa4-367b-49fd-8e41-72a8077d187a",
    title: goal.title,
    thrust_area: goal.thrustArea,
    uom: goal.uom,
    target: goal.target,
    weightage: Number(goal.weightage),
    status: "pending",
    submitted_at: new Date(),
  }));

  const { error } = await supabase
    .from("goals")
    .insert(formattedGoals);

  if (error) {
    console.error(error);
    alert("Failed to save goals");
    return;
  }

  await fetch("/api/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "manager@demo.com",
    subject: "New Goal Submission",
    message:
      "An employee has submitted goals for manager review in AtomQuest.",
  }),
});
setSubmitted(true);
  alert("Goals submitted successfully!");
}}
            >
              {submitted ? "✓ Submitted — Awaiting Manager Approval" : "Submit Goals for Approval"}
            </Button>

            {submitted && (
              <Button
                variant="destructive"
                className="mt-3 w-full rounded-xl h-10 text-sm"
               onClick={() => {
  const password = prompt("Enter admin password");

  if (password === "admin123") {
    setSubmitted(false);
    alert("Goals unlocked successfully");
  } else {
    alert("Incorrect admin password");
  }
}}
              >
                Admin Unlock Goals
              </Button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}