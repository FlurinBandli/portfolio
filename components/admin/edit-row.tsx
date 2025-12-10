"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import type { AdminRow } from "@/components/admin/admin-table";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";

type EditRowProps = {
  row: AdminRow;
  onEditRow: (id: number, data: Omit<AdminRow, "id">) => void;
};

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "last name is required"),
  email: z.email("Invalid email address"),
  url: z.url("Invalid URL"),
});

const EditRow = ({ row, onEditRow }: EditRowProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: row.first_name,
      last_name: row.last_name,
      email: row.email,
      url: row.url,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onEditRow(row.id, values);
  };

  return (
    <div>
      <div className="flex flex-col pl-4 gap-2"></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-50 mt-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} className="font-semibold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} className="font-semibold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="font-semibold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input {...field} className="font-semibold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit">Save</Button>
          <Button variant="ghost" type="button" onClick={() => form.reset()}>
            Cancel
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditRow;
