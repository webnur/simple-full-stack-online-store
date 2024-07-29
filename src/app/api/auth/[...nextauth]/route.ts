import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const hanler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTUTH_SECRET,
});

export { hanler as GET, hanler as POST };
