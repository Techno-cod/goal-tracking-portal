"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/supabase";

export default function Sidebar() {
  const router = useRouter();

const handleLogout = async () => {
  await supabase.auth.signOut();

  localStorage.removeItem("role");

  router.push("/");
};
  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white p-8 fixed shadow-2xl border-r border-slate-700">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">
          AtomQuest
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Goal Tracking Portal
        </p>
      </div>

      <div className="space-y-3">
        <Link
          href="/dashboard"
          className="block px-4 py-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition-all duration-200 hover:translate-x-1"
        >
          Employee Dashboard
        </Link>

        <Link
          href="/manager"
          className="block px-4 py-3 rounded-xl bg-slate-800 hover:bg-purple-600 transition-all duration-200 hover:translate-x-1"
        >
          Manager Dashboard
        </Link>

        <Link
          href="/checkin"
          className="block px-4 py-3 rounded-xl bg-slate-800 hover:bg-emerald-600 transition-all duration-200 hover:translate-x-1"
        >
          Quarterly Check-in
        </Link>

        <Link
          href="/admin"
          className="block px-4 py-3 rounded-xl bg-slate-800 hover:bg-orange-500 transition-all duration-200 hover:translate-x-1"
        >
          Admin Dashboard
        </Link>

        <Link
          href="/audit"
          className="block px-4 py-3 rounded-xl bg-slate-800 hover:bg-pink-600 transition-all duration-200 hover:translate-x-1"
        >
          Audit Logs
        </Link>
      </div>

      <div className="absolute bottom-8 left-8 right-8">
  <button
    onClick={handleLogout}
    className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl py-3 text-sm transition-all"
  >
    Logout
  </button>

  <p className="text-xs text-slate-500 mt-4 text-center">
    Enterprise Performance Suite
  </p>
</div>
    </div>
  );
}