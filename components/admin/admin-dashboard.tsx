"use client";

import { useState } from "react";
import { AdminRow, AdminTable } from "@/components/admin/admin-table";
import { CreateRow } from "@/components/admin/create-row";

export function AdminDashboard({ initialRows }: { initialRows: AdminRow[] }) {
  const [rows, setRows] = useState<AdminRow[]>(initialRows);
  const [selectedRow, setSelectedRow] = useState<AdminRow | null>(null);

  const handleCreateRow = (data: Omit<AdminRow, "id">) => {
    setRows((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...data,
      },
    ]);
  };

  const handleEditRow = (id: number, data: Omit<AdminRow, "id">) => {
    setRows((prev) => prev.map((row) => (row.id === id ? { id, ...data } : row)));
  };

  const handleDeleteRow = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
    setSelectedRow(null);
  };

  const handleCloseSheet = () => {
    setSelectedRow(null);
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
        <CreateRow onCreateRow={handleCreateRow} />
      </div>
      <AdminTable
        rows={rows}
        selectedRow={selectedRow}
        onRowClick={setSelectedRow}
        onEditRow={handleEditRow}
        onCloseSheet={handleCloseSheet}
        onDeleteRow={handleDeleteRow}
      />
    </div>
  );
}
