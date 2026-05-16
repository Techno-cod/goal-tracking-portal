"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CheckinPage() {
  const [achievement, setAchievement] = useState("");
  const [status, setStatus] = useState("Not Started");

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Quarterly Check-in
        </h1>

        <p className="text-gray-500 mb-8">
          Update your progress and achievements
        </p>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Increase Sales Revenue
              </h2>

              <p className="text-gray-500">
                Target: ₹10,00,000
              </p>
            </div>

            <div className="space-y-2">
              <label className="font-medium">
                Actual Achievement
              </label>

              <Input
                placeholder="Enter achievement"
                value={achievement}
                onChange={(e) =>
                  setAchievement(e.target.value)
                }
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">
                Status
              </label>

              <select
                className="w-full border rounded-md p-2"
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
              >
                <option>Not Started</option>
                <option>On Track</option>
                <option>Completed</option>
              </select>
            </div>

            <Button
              className="w-full"
              onClick={() =>
                alert("Quarterly check-in submitted!")
              }
            >
              Submit Check-in
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}