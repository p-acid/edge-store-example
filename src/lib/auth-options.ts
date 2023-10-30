import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      /**
       * The object key type defined in the corresponding `credentials` field is passed as
       * an argument (`credentials`) to the `authorize` callback below.
       */
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error()
        return { id: "EXAMPLE", ...credentials }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(userDetail) {
      if (Object.keys(userDetail).length === 0) {
        return false
      }

      return true
    },

    async redirect({ baseUrl }) {
      return `${baseUrl}/redirect`
    },

    async session({ session }) {
      /**
       * Here you can customize the session and store additional values ​​in the session.
       */
      return session
    },
  },
}

export default authOptions
