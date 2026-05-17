"use client";

import Link from "next/link";

export default function Sidebar() {
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

      <div className="absolute bottom-8 left-8 text-xs text-slate-500">
        Enterprise Performance Suite
      </div>
    </div>
  );
}