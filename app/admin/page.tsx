import { Card, CardContent } from "@/components/ui/card";
export default function AdminPage() {
  const stats = [
    {
      title: "Employees Completed Goals",
      value: "18 / 25",
    },
    {
      title: "Pending Approvals",
      value: "7",
    },
    {
      title: "Quarterly Check-ins Completed",
      value: "72%",
    },
    {
      title: "Locked Goal Sheets",
      value: "15",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mb-8">
          Organization-wide performance visibility
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h2 className="text-lg text-gray-500 mb-2">
                  {stat.title}
                </h2>

                <p className="text-4xl font-bold">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}