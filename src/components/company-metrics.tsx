import { Card, CardContent } from "@/components/ui/card"

const companies = [
  {
    name: "Company A",
    activeTrips: 20,
    revenue: "₱10,566.01",
    occupancyRate: "75%",
  },
  {
    name: "Company A",
    activeTrips: 20,
    revenue: "₱10,566.01",
    occupancyRate: "75%",
  },
  {
    name: "Company A",
    activeTrips: 20,
    revenue: "₱10,566.01",
    occupancyRate: "75%",
  },
]

export function CompanyMetrics() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">COMPANY PERFORMANCE METRICS</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {companies.map((company, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">{company.name}</h3>
              <div className="space-y-2 text-sm">
                <p>Active Trips: {company.activeTrips}</p>
                <p>Revenue: {company.revenue}</p>
                <p>Occupancy Rate: {company.occupancyRate}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

