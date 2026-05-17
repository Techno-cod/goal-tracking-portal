"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6 fixed">
      <h1 className="text-2xl font-bold mb-10">
        Goal Portal
      </h1>

      <div className="space-y-4">
        <Link
          href="/dashboard"
          className="block hover:text-blue-300"
        >
          Employee Dashboard
        </Link>

        <Link
          href="/manager"
          className="block hover:text-blue-300"
        >
          Manager Dashboard
        </Link>

        <Link
          href="/checkin"
          className="block hover:text-blue-300"
        >
          Quarterly Check-in
        </Link>

        <Link
          href="/admin"
          className="block hover:text-blue-300"
        >
          Admin Dashboard
        </Link>

        <Link
          href="/audit"
          className="block hover:text-blue-300"
        >
          Audit Logs
        </Link>
      </div>
    </div>
  );
}