import { GoogleDrive } from "iconsax-react";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NexthAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});
