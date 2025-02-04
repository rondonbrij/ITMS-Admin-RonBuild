import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function TripDetailsPage({
  params,
}: {
  params: { companyId: string; tripId: string }
}) {
  const tripDetails = {
    status: "Upcoming",
    date: "2024-12-31",
    time: "10:00 AM",
    destination: "Narra",
    driver: {
      name: "John Doe",
      license: "DL12345",
      expires: "2024-12-31",
      status: "Inactive",
      violations: 2,
    },
    vehicle: {
      name: "Toyota HIACE Commuter",
      color: "White",
      capacity: 16,
      status: "Operational",
    },
    passenger: {
      bookingCode: "AB12345",
      name: "John Doe",
      contact: "09123456789",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trip Details</h1>
        <Button variant="outline" asChild>
          <Link href={`/trips/${params.companyId}`}>Return</Link>
        </Button>
      </div>

      <div className="grid gap-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Trip Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Trip</h2>
              <dl className="space-y-2">
                <div className="grid grid-cols-2">
                  <dt className="font-medium">Status:</dt>
                  <dd>{tripDetails.status}</dd>
                </div>
                <div className="grid grid-cols-2">
                  <dt className="font-medium">Date:</dt>
                  <dd>{tripDetails.date}</dd>
                </div>
                <div className="grid grid-cols-2">
                  <dt className="font-medium">Time:</dt>
                  <dd>{tripDetails.time}</dd>
                </div>
                <div className="grid grid-cols-2">
                  <dt className="font-medium">Destination:</dt>
                  <dd>{tripDetails.destination}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          {/* Driver Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Driver</h2>
              <div className="grid grid-cols-[100px_1fr] gap-6">
                <Image
                  src="/placeholder.svg"
                  alt={tripDetails.driver.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium">Name:</dt>
                    <dd>{tripDetails.driver.name}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">License:</dt>
                    <dd>{tripDetails.driver.license}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Status:</dt>
                    <dd>
                      <Badge variant={tripDetails.driver.status === "Active" ? "success" : "destructive"}>
                        {tripDetails.driver.status}
                      </Badge>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Violations:</dt>
                    <dd>{tripDetails.driver.violations}</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Vehicle</h2>
              <div className="grid grid-cols-[100px_1fr] gap-6">
                <Image
                  src="/placeholder.svg"
                  alt={tripDetails.vehicle.name}
                  width={100}
                  height={60}
                  className="rounded-md"
                />
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium">Name:</dt>
                    <dd>{tripDetails.vehicle.name}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Color:</dt>
                    <dd>{tripDetails.vehicle.color}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Capacity:</dt>
                    <dd>{tripDetails.vehicle.capacity}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Status:</dt>
                    <dd>{tripDetails.vehicle.status}</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Passengers Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Passengers</h2>
          <Card>
            <CardContent className="p-6 space-y-2">
              <p>
                <span className="font-medium">Booking Code:</span> {tripDetails.passenger.bookingCode}
              </p>
              <p>
                <span className="font-medium">Name:</span> {tripDetails.passenger.name}
              </p>
              <p>
                <span className="font-medium">Contact Info:</span> {tripDetails.passenger.contact}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

