"use client";
import Sidebar from "@/components/ui/Sidebar";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [goals, setGoals] = useState([
   {
  title: "",
  target: "",
  weightage: "",
  thrustArea: "",
  uom: "",
},
  ]);
  const [submitted, setSubmitted] = useState(false);
  

  const addGoal = () => {
    if (goals.length >= 8) {
      alert("Maximum 8 goals allowed");
      return;
    }

    setGoals([
      ...goals,
      {
  title: "",
  target: "",
  weightage: "",
  thrustArea: "",
  uom: "",
},
    ]);
  };

  const handleChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedGoals = [...goals];

    updatedGoals[index] = {
      ...updatedGoals[index],
      [field]: value,
    };

    setGoals(updatedGoals);
  };

  const totalWeightage = goals.reduce(
    (sum, goal) => sum + Number(goal.weightage || 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-100 flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Employee Dashboard
        </h1>

        <p className="text-gray-500 mb-8">
          Create and manage your goals
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  <Card>
    <CardContent className="p-6">
      <h2 className="text-gray-500 text-sm">
        Goals Created
      </h2>

      <p className="text-4xl font-bold mt-2">
        {goals.length}
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6">
      <h2 className="text-gray-500 text-sm">
        Total Weightage
      </h2>

      <p className="text-4xl font-bold mt-2">
        {totalWeightage}%
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6">
      <h2 className="text-gray-500 text-sm">
        Submission Status
      </h2>

      <p className="text-2xl font-bold mt-3">
        {submitted ? "Locked" : "Draft"}
      </p>
    </CardContent>
  </Card>
</div>
<Card className="mb-6 border-2 border-blue-500">
  <CardContent className="p-6">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-2xl font-semibold">
          Shared Department Goal
        </h2>

        <p className="text-gray-500">
          Assigned by Manager
        </p>
      </div>

      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        Shared KPI
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        className="border rounded-md p-2 bg-gray-100"
        value="Improve Customer Satisfaction"
        disabled
      />

      <input
        className="border rounded-md p-2 bg-gray-100"
        value="90%"
        disabled
      />

      <input
        className="border rounded-md p-2"
        placeholder="Adjust Weightage"
      />
    </div>
  </CardContent>
</Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Goal Sheet
              </h2>

              <Button onClick={addGoal}>
                Add Goal
              </Button>
            </div>
<div className="space-y-6">
  {goals.map((goal, index) => (
    <div
      key={index}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Input
        placeholder="Goal Title"
        disabled={submitted}
        value={goal.title}
        onChange={(e) =>
          handleChange(
            index,
            "title",
            e.target.value
          )
        }
      />
      <select
  className="border rounded-md p-2"
  value={goal.thrustArea}
  disabled={submitted}
  onChange={(e) =>
    handleChange(
      index,
      "thrustArea",
      e.target.value
    )
  }
>
  <option value="">Select Thrust Area</option>
  <option value="Sales">Sales</option>
  <option value="Customer Success">
    Customer Success
  </option>
  <option value="Operations">
    Operations
  </option>
  <option value="Innovation">
    Innovation
  </option>
</select>

      <Input
        placeholder="Target"
        disabled={submitted}
        value={goal.target}
        onChange={(e) =>
          handleChange(
            index,
            "target",
            e.target.value
          )
        }
      />
      <select
  className="border rounded-md p-2"
  value={goal.uom}
  disabled={submitted}
  onChange={(e) =>
    handleChange(
      index,
      "uom",
      e.target.value
    )
  }
>
  <option value="">Select UoM</option>
  <option value="Numeric">
    Numeric
  </option>
  <option value="%">
    Percentage
  </option>
  <option value="Timeline">
    Timeline
  </option>
  <option value="Zero-based">
    Zero-based
  </option>
</select>

      <div>
        <Input
          placeholder="Weightage %"
          disabled={submitted}
          value={goal.weightage}
          onChange={(e) =>
            handleChange(
              index,
              "weightage",
              e.target.value
            )
          }
        />

        {Number(goal.weightage) > 0 &&
          Number(goal.weightage) < 10 && (
            <p className="text-red-500 text-sm mt-1">
              Minimum weightage is 10%
            </p>
        )}
      </div>
    </div>
  ))}
</div>
            

            <div className="mt-8">
              <h3 className="text-lg font-semibold">
                Total Weightage: {totalWeightage}%
              </h3>
              <Progress
  value={totalWeightage}
  className="mt-4"
/>

              {totalWeightage !== 100 && (
                <p className="text-red-500 mt-2">
                  Total weightage must equal 100%
                </p>
              )}
            </div>

<Button
  className="mt-6 w-full"
  disabled={totalWeightage !== 100 || submitted}
  onClick={() => {
    setSubmitted(true);
    alert("Goals submitted successfully!");
  }}
>
  {submitted ? "Goals Locked" : "Submit Goals"}
</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  );
}