"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const notices = [
  {
    id: 1,
    date: "05 JUNE",
    title: "Annual Retreat",
    description: "Announcement concerning the public holidays...",
  },
  {
    id: 2,
    date: "05 JUNE",
    title: "Annual Retreat",
    description: "Announcement concerning public holidays...",
  },
  {
    id: 3,
    date: "05 JUNE",
    title: "Annual Retreat",
    description: "Announcement concerning public holidays...",
  },
]

export function NoticeBoard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Notice</h2>
          <Button variant="link" className="text-sm" asChild>
            <Link href="/announcements">
              All Notices <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="flex gap-4 items-start">
              <div className="text-sm text-muted-foreground">{notice.date}</div>
              <div>
                <h3 className="font-medium">{notice.title}</h3>
                <p className="text-sm text-muted-foreground">{notice.description}</p>
                <Button variant="link" size="sm" className="px-0">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

