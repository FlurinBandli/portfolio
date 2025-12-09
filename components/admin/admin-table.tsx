import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

export function AdminTable({ rows }: { rows: AdminRow[] }) {
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <Sheet>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox className="l-2">test</Checkbox>
                </TableCell>
                <SheetTrigger asChild>
                  <TableCell>{row.id}</TableCell>
                </SheetTrigger>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <SheetContent side="left">placeholder</SheetContent>
        </Sheet>
      </Table>
    </div>
  );
}
