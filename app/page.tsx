"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
 const router = useRouter();

const handleLogin = (role: string) => {
  localStorage.setItem("role", role);

  if (role === "Employee") {
    router.push("/dashboard");
  }

  if (role === "Manager") {
    router.push("/manager");
  }

  if (role === "Admin") {
    router.push("/admin");
  }
};

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Goal Tracking Portal
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Select your role to continue
          </p>

          <div className="space-y-4">
            <Button
              className="w-full h-12 text-lg"
              onClick={() => handleLogin("Employee")}
            >
              Login as Employee
            </Button>

            <Button
              className="w-full h-12 text-lg"
              variant="secondary"
              onClick={() => handleLogin("Manager")}
            >
              Login as Manager
            </Button>

            <Button
              className="w-full h-12 text-lg"
              variant="outline"
              onClick={() => handleLogin("Admin")}
            >
              Login as Admin
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}