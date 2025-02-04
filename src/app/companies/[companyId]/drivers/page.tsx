import { DriverTable } from "@/components/driver-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import Link from "next/link"

export default function DriversPage({
  params,
}: {
  params: { companyId: string }
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Driver Management</h1>
        <Button variant="outline" asChild>
          <Link href="/companies">Return</Link>
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Input placeholder="Type or search a driver" className="pl-8" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter drivers</span>
        </Button>
      </div>
      <DriverTable companyId={params.companyId} />
    </div>
  )
}

