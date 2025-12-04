import { Button } from "@/components/ui/button";
import { loginWithGitHub, loginWithGoogle } from "./actions";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-b from-gray-600 to-gray-800">
      <div className="flex flex-col gap-4 border-2 border-black p-4 rounded-lg bg-linear-to-b from-green-500 to-purple-600">
        <h1 className="text-2xl font-semibold">Login</h1>

        <LoginForm />
        <form action={loginWithGoogle}>
          <Button className="w-50 bg-yellow-400" type="submit">
            Signin with Google
          </Button>
        </form>
        <form action={loginWithGitHub}>
          <Button className="w-50 bg-amber-700 " type="submit">
            Signin with GitHub
          </Button>
        </form>
      </div>
    </div>
  );
}
