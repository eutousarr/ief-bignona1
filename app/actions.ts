"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// import { getImageUrl} from "@/lib/image"
import { NextResponse } from "next/server";

export async function  handleSubmission(formData: FormData ) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }
  const message = formData.get("message");

//   let fileUrl = null;
//   if (file instanceof File) {
//     fileUrl = await getImageUrl(file);
//   }
  const fullname = user.given_name + " " + user.family_name
  await prisma.guestbookEntry.create({
    data: {
      id: crypto.randomUUID(), // Generate a unique ID
      message: message as string,
      name: fullname as string,
      userId: user.id,
      updatedAt: new Date(), // Set the current date and time
    },
  });

  revalidatePath("/");
  redirect("/dashboard")
  return NextResponse.json({"message": "Created successfully"});
}

export async function articleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }

  const message = formData.get("message");
//   const fileUrl = formData.get("fileUrl");

  await prisma.guestbookEntry.create({
    data: {
      id: crypto.randomUUID(), // Generate a unique ID
      message: message as string,
      userId: user.id,
      name: user.given_name + " " + user.family_name,
      updatedAt: new Date(), // Set the current date and time
    },
  });

  // revalidatePath("/articles");
  return redirect("/");
}

export async function deleteArticle(id: string) {
  await prisma.guestbookEntry.deleteMany({
    where: {
      id: id,
    },
  });
  // revalidatePath("/articles");
  return redirect("/");
}

