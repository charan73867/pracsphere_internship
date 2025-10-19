import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Sidebar, Topbar } from "@repo/ui";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="lg:pl-64">
        <Topbar user={session.user} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
