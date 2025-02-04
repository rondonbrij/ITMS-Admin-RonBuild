"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Building2, Home, LifeBuoy, MapPin, MessageSquare } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Dashboard", icon: Home, href: "/" },
  { title: "Companies", icon: Building2, href: "/companies" },
  { title: "Trips", icon: MapPin, href: "/trips" },
  { title: "Announcements", icon: MessageSquare, href: "/announcements" },
  { title: "Reports", icon: BarChart3, href: "/reports" },
  { title: "Support", icon: LifeBuoy, href: "/support" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r bg-[#0A0B2E] text-white">
      <SidebarHeader className="p-4">
        <h1 className="text-xl font-bold">LTT Admin</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href} className="hover:bg-white/10">
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

