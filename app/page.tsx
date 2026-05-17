"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = (role: string) => {
    localStorage.setItem("role", role);
    if (role === "Employee") router.push("/dashboard");
    if (role === "Manager") router.push("/manager");
    if (role === "Admin") router.push("/admin");
  };

  const roles = [
    { label: "Login as Employee", role: "Employee", desc: "Create and submit your goals", color: "bg-blue-600 hover:bg-blue-700" },
    { label: "Login as Manager", role: "Manager", desc: "Review and approve team goals", color: "bg-purple-600 hover:bg-purple-700" },
    { label: "Login as Admin", role: "Admin", desc: "Organisation-wide visibility", color: "bg-slate-700 hover:bg-slate-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tight text-white">
            AtomQuest
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            Goal Setting & Tracking Portal · FY 2026
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8">
          <h2 className="text-white font-bold text-lg mb-1">
            Welcome back
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            Select your role to continue
          </p>

          <div className="space-y-3">
            {roles.map((r) => (
              <button
                key={r.role}
                onClick={() => handleLogin(r.role)}
                className={`w-full ${r.color} text-white rounded-xl p-4 text-left transition-all duration-200 hover:scale-[1.01]`}
              >
                <div className="font-semibold text-sm">{r.label}</div>
                <div className="text-xs opacity-70 mt-0.5">{r.desc}</div>
              </button>
            ))}
          </div>

          <p className="text-slate-600 text-xs text-center mt-8">
            Demo environment · No password required
          </p>
        </div>

      </div>
    </div>
  );
}