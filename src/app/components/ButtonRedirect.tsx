"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
// const isLogin = false;

export default function ButtonRedirect() {
  // if(!isLogin) {
  //   redirect('/login')
  // }

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login");
  };

  return (
    <Button variant={"outline"} onClick={handleRedirect}>
      Button useRouter
    </Button>
  );
}
