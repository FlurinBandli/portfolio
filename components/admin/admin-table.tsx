import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import EditRow from "@/components/admin/edit-row";

export type AdminRow = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  url: string;
};

const columns = [
  { key: "select", label: <Checkbox /> },
  { key: "id", label: "ID" },
  { key: "first_name", label: "First Name" },
  { key: "last_name", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "url", label: "URL" },
] as const;

export function AdminTable({
  rows,
  selectedRow,
  onRowClick,
  onCloseSheet,
  onEditRow,
}: {
  rows: AdminRow[];
  selectedRow: AdminRow | null;
  onRowClick: (row: AdminRow) => void;
  onCloseSheet: () => void;
  onEditRow: (id: number, data: Omit<AdminRow, "id">) => void;
}) {
  return (
    <div className="overflow-hidden rounded-md border">
      <Sheet
        open={!!selectedRow}
        onOpenChange={(open) => {
          if (!open) onCloseSheet();
        }}
      >
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <SheetTrigger onClick={() => onRowClick(row)} asChild>
                  <TableCell>{row.id}</TableCell>
                </SheetTrigger>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <SheetContent side="left" className="pl-4">
          <SheetHeader>
            <SheetTitle>Edit row</SheetTitle>
          </SheetHeader>
          {selectedRow && (
            <EditRow
              row={selectedRow}
              onEditRow={(id, data) => {
                onEditRow(id, data);
                onCloseSheet();
              }}
            />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
