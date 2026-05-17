import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/ui/Sidebar";

export default function AuditPage() {
  const logs = [
    {
      action: "Goal Approved",
      user: "Manager",
      timestamp: "16 May 2026, 5:30 PM",
      status: "Approved",
    },
    {
      action: "Goal Weightage Updated",
      user: "Employee",
      timestamp: "16 May 2026, 4:15 PM",
      status: "Modified",
    },
    {
      action: "Quarterly Check-in Submitted",
      user: "Employee",
      timestamp: "16 May 2026, 6:10 PM",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Audit Trail
        </h1>

        <p className="text-gray-500 mb-8">
          Track all system activities and goal changes
        </p>

        <div className="space-y-6">
          {logs.map((log, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">
                    {log.action}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    By {log.user}
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    {log.timestamp}
                  </p>
                </div>

                <Badge
                  className={
                    log.status === "Approved"
                      ? "bg-green-500"
                      : log.status === "Modified"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }
                >
                  {log.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}