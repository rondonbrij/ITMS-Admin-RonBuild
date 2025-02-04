import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function TripDetailsPage({
  params,
}: {
  params: { companyId: string; tripId: string }
}) {
  const tripDetails = {
    trip: {
      status: "Upcoming",
      date: "2024-12-31",
      time: "10:00 AM",
      destination: "Narra",
    },
    driver: {
      name: "John Doe",
      image: "/placeholder.svg",
      license: "DL12345",
      expires: "2024-12-31",
      status: "Inactive",
      violations: 2,
    },
    vehicle: {
      name: "Toyota HIACE Commuter",
      image: "/placeholder.svg",
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
    <div className="p-6 w-full">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Trip Details</h1>
          <Button variant="outline" asChild>
            <Link href={`/trips/${params.companyId}`}>Return</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Trip Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Trip</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="text-muted-foreground">Status:</span>
                  <span>{tripDetails.trip.status}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{tripDetails.trip.date}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="text-muted-foreground">Time:</span>
                  <span>{tripDetails.trip.time}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="text-muted-foreground">Destination:</span>
                  <span>{tripDetails.trip.destination}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Driver Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Driver</h2>
            <Card className="p-6">
              <div className="flex gap-4">
                <Image
                  src={tripDetails.driver.image || "/placeholder.svg"}
                  alt="Driver"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2 flex-1">
                  <div>
                    <p className="text-sm text-muted-foreground">Name:</p>
                    <p>{tripDetails.driver.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">License:</p>
                    <p>{tripDetails.driver.license}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Expires:</p>
                    <p>{tripDetails.driver.expires}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status:</p>
                    <Badge variant="destructive">{tripDetails.driver.status}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Violations:</p>
                    <p>{tripDetails.driver.violations}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Vehicle Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Vehicle</h2>
            <Card className="p-6">
              <div className="flex gap-4">
                <Image
                  src={tripDetails.vehicle.image || "/placeholder.svg"}
                  alt="Vehicle"
                  width={120}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2 flex-1">
                  <div>
                    <p className="text-sm text-muted-foreground">Name:</p>
                    <p>{tripDetails.vehicle.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Color:</p>
                    <p>{tripDetails.vehicle.color}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Capacity:</p>
                    <p>{tripDetails.vehicle.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status:</p>
                    <p>{tripDetails.vehicle.status}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Passengers Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Passengers</h2>
          <Card className="p-6">
            <div className="space-y-2">
              <div className="grid grid-cols-[120px_1fr]">
                <span className="text-muted-foreground">Booking Code:</span>
                <span>{tripDetails.passenger.bookingCode}</span>
              </div>
              <div className="grid grid-cols-[120px_1fr]">
                <span className="text-muted-foreground">Name:</span>
                <span>{tripDetails.passenger.name}</span>
              </div>
              <div className="grid grid-cols-[120px_1fr]">
                <span className="text-muted-foreground">Contact Info:</span>
                <span>{tripDetails.passenger.contact}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

