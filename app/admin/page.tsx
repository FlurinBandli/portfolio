import { Logout } from "@/components/auth/logout-button";
import SystemInfoSheet from "@/components/admin/system-info-sheet";

export default function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <header className="fixed top-8 right-8">
        <Logout />
      </header>
      <h1 className="font-semibold text-2xl">Admin</h1>
      <p>U should not be able to see this page unless you are logged in.</p>

      <SystemInfoSheet />
    </div>
  );
}
