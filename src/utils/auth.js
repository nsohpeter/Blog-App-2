import GoogleProvider from "next-auth/providers/Google";
import GithubProvider from "next-auth/providers/Github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        try {
          const user = await prisma.User.findUnique({
            where: {
              email: credentials?.email,
            },
          });
          console.log(user);
          if (user) {
            const passwordMatch = await bcrypt.compare(
              credentials?.password,
              user.password
            );
            if (passwordMatch) {
              return Promise.resolve(user);
            } else {
              throw new Error("Incorrect Password");
            }
          } else {
            throw new Error("No such user found");
          }
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
};
