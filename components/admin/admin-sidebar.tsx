import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "../ui/sidebar";
import Link from "next/link";
import { Logout } from "@/components/auth/logout-button";
import { SystemInfoSheet } from "@/components/admin/system-info-sheet";
import { Home, ClipboardList, ChartPie, Folder } from "lucide-react";

const items = [
  { title: "Home", url: "/admin", icon: Home },
  { title: "Tasks", url: "/admin/tasks", icon: ClipboardList },
  { title: "Analytics", url: "/admin/analytics", icon: ChartPie },
  { title: "Projects", url: "/admin/projects", icon: Folder },
];

export function AdminSidebar() {
  return (
    <div>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="p-4 space-y-2">
                {items.map((item) => (
                  <Link className="flex flex-row gap-2" key={item.title} href={item.url}>
                    <item.icon />
                    <span> {item.title}</span>
                  </Link>
                ))}
                <div className="border-t p-8">
                  <Logout />
                </div>
                <div className="border-t p-8">
                  <SystemInfoSheet />
                </div>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarFooter />
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
