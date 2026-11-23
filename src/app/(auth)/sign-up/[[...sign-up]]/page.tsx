import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Page() {
  const { userId } = await auth();
  if (userId) redirect("/home");

  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
}
