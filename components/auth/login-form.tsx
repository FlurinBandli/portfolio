"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const loginFormSchema = z.object({
  name: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const result = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
      return;
    }
    router.push("/admin");
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-50">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} className="font-semibold"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="font-semibold"></Input>
                </FormControl>
                <FormMessage className="" />
              </FormItem>
            )}
          ></FormField>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <Button type="submit" className="bg-fuchsia-800">
            Signin with Credentials
          </Button>
        </form>
      </Form>
    </div>
  );
}
