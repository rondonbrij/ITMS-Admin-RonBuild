import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LTT Admin Dashboard",
  description: "Admin dashboard for LTT system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        <SidebarProvider defaultOpen>
          <div className="flex h-screen overflow-hidden">
            <AppSidebar />
            <main className="flex-1 overflow-y-auto">
              <div className="container p-6">{children}</div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

