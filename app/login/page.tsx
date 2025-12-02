import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form
        action={async (formData: FormData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <input type="hidden" name="redirectTo" value="/admin" />
        <input type="text" name="name" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Signin with Credentials</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/admin" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/admin" });
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </div>
  );
}
