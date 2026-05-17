"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "./supabase";

export default function Home() {
  const router = useRouter();

  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    localStorage.setItem("role", selectedRole);

    if (selectedRole === "Employee") {
      router.push("/dashboard");
    }

    if (selectedRole === "Manager") {
      router.push("/manager");
    }

    if (selectedRole === "Admin") {
      router.push("/admin");
    }
  };

  const roles = [
    {
      label: "Login as Employee",
      role: "Employee",
      desc: "Create and submit your goals",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      label: "Login as Manager",
      role: "Manager",
      desc: "Review and approve team goals",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      label: "Login as Admin",
      role: "Admin",
      desc: "Organisation-wide visibility",
      color: "bg-slate-700 hover:bg-slate-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tight text-white">
            AtomQuest
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            Goal Setting & Tracking Portal · FY 2026
          </p>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8">

          {!selectedRole ? (
            <>
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
                    onClick={() => setSelectedRole(r.role)}
                    className={`w-full ${r.color} text-white rounded-xl p-4 text-left transition-all duration-200 hover:scale-[1.01]`}
                  >
                    <div className="font-semibold text-sm">
                      {r.label}
                    </div>

                    <div className="text-xs opacity-70 mt-0.5">
                      {r.desc}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setSelectedRole("")}
                className="text-sm text-slate-400 mb-6"
              >
                ← Back
              </button>

              <h2 className="text-white font-bold text-xl mb-2">
                {selectedRole} Login
              </h2>

              <p className="text-slate-400 text-sm mb-6">
                Sign in to continue
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white"
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white"
                />

                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-3 font-semibold transition-all"
                >
                  Login
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}