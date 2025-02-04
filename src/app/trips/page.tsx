import { Input } from "@/components/ui/input"
import { CompanyTripsGrid } from "@/components/company-trips-grid"

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transport Company Trips</h1>
      <div className="relative">
        <Input placeholder="Type or search a company" className="pl-8" />
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
      <CompanyTripsGrid />
    </div>
  )
}

