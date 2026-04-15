import { AdminAreaChart } from "@/components/admin/area-chart";
import { GitlabCommits } from "@/components/admin/gitlab-commits";

export default function AdminPage() {
  return (
    <div>
      <AdminAreaChart />
      <GitlabCommits />
    </div>
  );
}
