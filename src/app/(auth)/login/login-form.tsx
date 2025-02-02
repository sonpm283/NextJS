"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import envConfig from "@/config";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onSubmit",
  });

  useEffect(() => {
    const subscription = form.watch(() => {
      setError("");
    });
    return () => subscription.unsubscribe();
  }, [form]);

  async function onSubmit(formData: LoginBodyType) {
    try {
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(async (res) => {
        const payload = await res.json();

        const data = {
          status: res.status,
          payload,
        };

        if (!res.ok) {
          throw data;
        }

        return data;
      });
      toast({
        description: result.payload.message,
      });
    } catch (error: any) {
      // const errors = error.payload.errors as {
      //   field: "email" | "password";
      //   message: string;
      // }[];

      const status = error.status as number;

      if (status === 422) {
        setError(error.payload.message);
        // errors.forEach((error) => {
        //   form.setError(error.field, {
        //     type: "server",
        //     message: error.message,
        //   });
        // });
      } else {
        toast({
          variant: "destructive",
          title: "Lỗi",
          description: error.payload.message,
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 max-w-2xl mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <FormMessage>{error}</FormMessage>}
        <Button type="submit" className="w-full !mt-10">
          Login
        </Button>
      </form>
    </Form>
  );
}
