import { SignOut } from "@/app/components/signout-button";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
      <p>U should not be able to see this page unless you are logged in.</p>
      <SignOut />
    </div>
  );
}
