"use client";
import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ManagerPage() {
  const [goals, setGoals] = useState([
    {
      employee: "Rahul Sharma",
      title: "Increase Sales Revenue",
      target: "₹10,00,000",
      weightage: "40%",
      status: "Pending",
    },
    {
      employee: "Priya Verma",
      title: "Reduce Customer Complaints",
      target: "20%",
      weightage: "30%",
      status: "Pending",
    },
  ]);
  const handleApprove = (index: number) => {
  const updatedGoals = [...goals];

  updatedGoals[index].status = "Approved";

  setGoals(updatedGoals);
};

const handleReject = (index: number) => {
  const updatedGoals = [...goals];

  updatedGoals[index].status = "Rejected";

  setGoals(updatedGoals);
};

  return (
    <div className="min-h-screen bg-slate-100 flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Manager Dashboard
        </h1>

        <p className="text-gray-500 mb-8">
          Review and approve employee goals
        </p>

        <div className="space-y-6">
          {goals.map((goal, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">
                      {goal.title}
                    </h2>

                    <p>
                      <span className="font-semibold">
                        Employee:
                      </span>{" "}
                      {goal.employee}
                    </p>

                    <p>
                      <span className="font-semibold">
                        Target:
                      </span>{" "}
                      {goal.target}
                    </p>

                    <p>
                      <span className="font-semibold">
                        Weightage:
                      </span>{" "}
                      {goal.weightage}
                    </p>

                    <Badge
  className={
    goal.status === "Approved"
      ? "bg-green-500"
      : goal.status === "Rejected"
      ? "bg-red-500"
      : "bg-yellow-500"
  }
>
  {goal.status}
</Badge>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={() => handleApprove(index)}>
                        Approve
                    </Button>

                    <Button
                      variant="destructive"
                      onClick={() => handleReject(index)}
                       >
                      Reject
                   </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}