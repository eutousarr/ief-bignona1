import { prisma } from "@/app/utils/db";
import { Post } from "@/types/blogPosts";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const { getUser } = getKindeServerSession();
const user = await getUser();

const posts: Post[] = await prisma.blogPost.findMany({
  where: {
    authorId: user?.id,
  },
});

export default posts;
