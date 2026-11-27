import { auth } from "@clerk/nextjs/server";

export default async function VideoUploadPage() {
  await auth.protect();
  return <div>VideoUpload</div>;
}
