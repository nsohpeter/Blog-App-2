import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.Post.findUnique({
      where: {
        slug,
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch {
    return new NextResponse("database error", { status: 200 });
  }
};
