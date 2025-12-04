"use server";

import { signIn } from "@/auth";

export async function loginWithGoogle() {
  await signIn("google", { redirectTo: "/admin" });
}

export async function loginWithGitHub() {
  await signIn("github", { redirectTo: "/admin" });
}
