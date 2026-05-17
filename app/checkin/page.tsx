"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CheckinPage() {
  const [achievement, setAchievement] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [managerComment, setManagerComment] = useState("");
  const target = 1000000;

const progress =
  achievement
    ? Math.min(
        (Number(achievement.replace(/,/g, "")) /
          target) *
          100,
        100
      )
    : 0;

  return (
    <div className="min-h-screen bg-slate-100 flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Quarterly Check-in
        </h1>

        <p className="text-gray-500 mb-8">
          Update your progress and achievements
        </p>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card>
    <CardContent className="p-4">
      <h2 className="text-gray-500 text-sm">
        Planned Target
      </h2>

      <p className="text-3xl font-bold mt-2">
        ₹10,00,000
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-4">
      <h2 className="text-gray-500 text-sm">
        Actual Achievement
      </h2>

      <p className="text-3xl font-bold mt-2">
        {achievement || "₹0"}
      </p>
      <Progress
  value={progress}
  className="mt-4"
/>

<p className="text-sm text-gray-500 mt-2">
  {progress.toFixed(1)}% achieved
</p>
    </CardContent>
  </Card>
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

            <div className="space-y-2">
  <label className="font-medium">
    Manager Check-in Comment
  </label>

  <textarea
    className="w-full border rounded-md p-3"
    rows={4}
    placeholder="Enter manager feedback..."
    value={managerComment}
    onChange={(e) =>
      setManagerComment(e.target.value)
    }
  />
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
    </div>
  );
}