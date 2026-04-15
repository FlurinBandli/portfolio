import { Logout } from "@/components/auth/logout-button";
import { SystemInfoSheet } from "@/components/admin/system-info-sheet";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import type { AdminRow } from "@/components/admin/admin-table";

const initialRows: AdminRow[] = [
  {
    id: 1,
    first_name: "Melva",
    last_name: "Skelding",
    email: "mskelding0@wunderground.com",
    url: "https://eepurl.com/turpis/integer/aliquet.png",
  },
  {
    id: 2,
    first_name: "Elberta",
    last_name: "Demeter",
    email: "edemeter1@tamu.edu",
    url: "http://privacy.gov.au/praesent/id/massa/id.xml",
  },
  {
    id: 3,
    first_name: "Lena",
    last_name: "Philbin",
    email: "lphilbin2@epa.gov",
    url: "http://ucoz.ru/nulla.xml",
  },
  {
    id: 4,
    first_name: "Phyllida",
    last_name: "Whitfeld",
    email: "pwhitfeld3@yandex.ru",
    url: "https://wikimedia.org/dolor/sit/amet/consectetuer/adipiscing/elit/proin.jsp",
  },
  {
    id: 5,
    first_name: "Lloyd",
    last_name: "Worsfold",
    email: "lworsfold4@taobao.com",
    url: "http://squarespace.com/justo.aspx",
  },
];

export default function Analytics() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <header className="fixed top-8 right-8">
        <Logout />
      </header>
      <AdminDashboard initialRows={initialRows} />
      <div className="fixed top-8 right-32">
        <SystemInfoSheet />
      </div>
    </div>
  );
}
