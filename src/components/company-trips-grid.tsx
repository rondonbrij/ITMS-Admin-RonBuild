import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const companies = [
  {
    id: "a",
    name: "Company A",
    dailyBookings: 20,
    monthlyBookings: 150,
  },
  {
    id: "b",
    name: "Company B",
    dailyBookings: 20,
    monthlyBookings: 150,
  },
  {
    id: "c",
    name: "Company C",
    dailyBookings: 20,
    monthlyBookings: 150,
  },
  {
    id: "d",
    name: "Company D",
    dailyBookings: 20,
    monthlyBookings: 150,
  },
  {
    id: "e",
    name: "Company E",
    dailyBookings: 20,
    monthlyBookings: 150,
  },
  {
    id: "f",
    name: "Company F",
    dailyBookings: 20,
    monthlyBookings: 150,
  },
]

export function CompanyTripsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {companies.map((company) => (
        <Card key={company.id} className="hover:bg-accent/50 transition-colors cursor-pointer">
          <Link href={`/trips/${company.id}`}>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">{company.name}</h2>
              <div className="space-y-2 text-sm">
                <p>Daily Bookings: {company.dailyBookings}</p>
                <p>Monthly Bookings: {company.monthlyBookings}</p>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}

