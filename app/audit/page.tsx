"use client";
import Sidebar from "@/components/ui/Sidebar";

export default function AuditPage() {
  const logs = [
    { action: "Goal Approved", user: "Vikram Mehta", detail: "Increase Sales Revenue — locked for Rahul Sharma", timestamp: "16 May 2026, 5:30 PM", status: "Approved" },
    { action: "Goal Weightage Updated", user: "Vikram Mehta", detail: "Weightage changed from 30% to 40% before approval", timestamp: "16 May 2026, 4:15 PM", status: "Modified" },
    { action: "Goal Submitted", user: "Priya Sharma", detail: "2 goals submitted for manager approval", timestamp: "16 May 2026, 3:00 PM", status: "Submitted" },
    { action: "Quarterly Check-in Submitted", user: "Rahul Sharma", detail: "Q2 achievement logged — Revenue: ₹8,50,000", timestamp: "16 May 2026, 6:10 PM", status: "Completed" },
    { action: "Goal Returned for Rework", user: "Vikram Mehta", detail: "Reduce Customer Complaints — target needs revision", timestamp: "15 May 2026, 2:45 PM", status: "Returned" },
  ];

  const statusStyle: Record<string, string> = {
    Approved: "bg-emerald-500/20 text-emerald-400",
    Modified: "bg-amber-500/20 text-amber-400",
    Submitted: "bg-blue-500/20 text-blue-400",
    Completed: "bg-purple-500/20 text-purple-400",
    Returned: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex">
      <Sidebar />
      <div className="flex-1 ml-72 p-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight text-white">
              Audit Trail
            </h1>
            <p className="text-slate-400 mt-1 text-sm">
              All goal changes after lock date are recorded here
            </p>
          </div>

          {/* Log Items */}
          <div className="space-y-3">
            {logs.map((log, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 flex justify-between items-start gap-4"
              >
                <div className="flex gap-4 items-start">
                  {/* Timeline dot */}
                  <div className="mt-1 w-2 h-2 rounded-full bg-slate-500 flex-shrink-0" />
                  <div>
                    <h2 className="text-white font-semibold text-sm">{log.action}</h2>
                    <p className="text-slate-400 text-xs mt-1">{log.detail}</p>
                    <div className="flex gap-3 mt-2">
                      <span className="text-slate-500 text-xs">By {log.user}</span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-slate-500 text-xs">{log.timestamp}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0 ${statusStyle[log.status] || "bg-slate-700 text-slate-300"}`}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}