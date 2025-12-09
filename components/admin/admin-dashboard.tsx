"use client";

import { useState } from "react";
import { AdminRow, AdminTable } from "@/components/admin/admin-table";
import CreateRowButton from "@/components/admin/create-row-button";

const AdminDashboard = ({ initialRows }: { initialRows: AdminRow[] }) => {
  const [rows, setRows] = useState<AdminRow[]>(initialRows);

  const handleCreateRow = (data: Omit<AdminRow, "id">) => {
    setRows((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...data,
      },
    ]);
  };

  return (
    <div>
      <AdminTable rows={rows} />
      <CreateRowButton onCreateRow={handleCreateRow} />
    </div>
  );
};
export default AdminDashboard;
