"use client"

import {
  SessionProvider as NextAuthSessionProvider,
  SessionProviderProps,
} from "next-auth/react"

const SessionProvider = ({ children }: SessionProviderProps) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}

export default SessionProvider
