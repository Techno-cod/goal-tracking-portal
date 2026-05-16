"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  role: string;
}

export default function Navbar({
  role,
}: NavbarProps) {
  return (
    <div className="w-full bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">
          Goal Tracking Portal
        </h1>

        <p className="text-sm text-gray-500">
          Logged in as {role}
        </p>
      </div>

      <div className="flex gap-3">
        <Link href="/">
          <Button variant="outline">
            Home
          </Button>
        </Link>

        <Link href="/dashboard">
          <Button variant="secondary">
            Employee
          </Button>
        </Link>

        <Link href="/manager">
          <Button variant="secondary">
            Manager
          </Button>
        </Link>

        <Link href="/admin">
          <Button variant="secondary">
            Admin
          </Button>
        </Link>
      </div>
    </div>
  );
}