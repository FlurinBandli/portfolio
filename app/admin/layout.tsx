import Link from "next/link";
import { Logout } from "@/components/auth/logout-button";
import SystemInfoSheet from "@/components/admin/system-info-sheet";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-52 flex flex-col border-r text-center">
        <nav>
          <Link href="/admin/tasks" className="block p-4 hover:bg-gray-100">
            Tasks
          </Link>
          <Link href="/admin/analytics" className="block p-4 hover:bg-gray-100">
            Analytics
          </Link>

          <Link href="/admin/projects" className="block p-4 hover:bg-gray-100">
            Projects
          </Link>
        </nav>
        <div className="border-t p-8">
          <Logout />
        </div>
        <div className="border-t p-8">
          <SystemInfoSheet />
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
