import { auth } from "@clerk/nextjs/server";

export default async function SocialSharePage() {
  await auth.protect();
  return <div>SocialShare</div>;
}
