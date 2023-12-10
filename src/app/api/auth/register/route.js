import { NextResponse } from "next/server";
//import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/utils/connect";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  try {
    const hashPassword = await bcrypt.hash(password, 5);

    const emailExist = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });
    if (emailExist) {
      return new NextResponse("user already exist", { status: 400 });
    }

    await prisma.User.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
      },
    });

    return new NextResponse("user created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error.message, { status: 500 });
  }
};
