import { signOut } from "@/auth";
import { Button } from "../ui/button";

export function Logout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
