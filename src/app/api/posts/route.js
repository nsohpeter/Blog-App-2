import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || 1;
  const cat = searchParams.get("cat") || "";

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: parseInt(page - 1) * POST_PER_PAGE,
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  //

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.Post.findMany(query),
      prisma.Post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
