import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CompanyTripsGrid } from "@/components/company-trips-grid"
import { format } from "date-fns"
import Link from "next/link"

export default function CompanyTripsPage({
  params,
}: {
  params: { companyId: string }
}) {
  const company = {
    id: params.companyId,
    name: "Company A",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trips for {company.name}</h1>
        <Button variant="outline" asChild>
          <Link href="/trips">Return</Link>
        </Button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="MM/DD/YYYY"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={format(new Date(), "MM/dd/yyyy")}
          readOnly
        />
        <Calendar mode="single" className="rounded-md border absolute top-full left-0 mt-1 bg-popover z-50" />
      </div>

      <CompanyTripsGrid />
    </div>
  )
}

