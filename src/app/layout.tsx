import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { TanstackProviders } from "@/provider/query-provider"
import SessionProvider from "@/provider/session-provider"
import { ThemeProvider } from "@/provider/theme-provider"

import "@/styles/global.css"

import { EdgeStoreProvider } from "@/lib/edge-store"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Practice for Edge Store",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <EdgeStoreProvider>
          <TanstackProviders>
            <SessionProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </SessionProvider>
          </TanstackProviders>
        </EdgeStoreProvider>

        <Toaster />
      </body>
    </html>
  )
}
