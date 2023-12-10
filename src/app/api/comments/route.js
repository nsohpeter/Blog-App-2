import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const postSlug = searchParams.get("postSlug");

  try {
    // console.log("post id ===>", postId);
    const comments = await prisma.Comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("database error", { status: 200 });
  }
};
