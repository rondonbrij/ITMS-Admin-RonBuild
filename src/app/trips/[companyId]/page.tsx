"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface Trip {
  id: string
  datetime: string
  driver: string
  destination: string
  vehicle: string
  status: "upcoming" | "completed" | "cancelled"
}

const trips: Trip[] = [
  {
    id: "1",
    datetime: "12-31-2024 - 10:00 AM",
    driver: "John Doe",
    destination: "Narra",
    vehicle: "Toyota Van",
    status: "upcoming",
  },
  {
    id: "2",
    datetime: "12-31-2024 - 10:00 AM",
    driver: "John Doe",
    destination: "Narra",
    vehicle: "Toyota Van",
    status: "upcoming",
  },
  {
    id: "3",
    datetime: "12-31-2024 - 10:00 AM",
    driver: "John Doe",
    destination: "Narra",
    vehicle: "Toyota Van",
    status: "upcoming",
  },
]

export default function CompanyTripsPage({
  params,
}: {
  params: { companyId: string }
}) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="p-6 w-full">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Trips for Company A</h1>
          <Button variant="outline" asChild>
            <Link href="/trips">Return</Link>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("w-[280px] pl-3 text-left font-normal")}>
                {date ? format(date, "MM/dd/yyyy") : "MM/DD/YYYY"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {trips.map((trip) => (
            <Link key={trip.id} href={`/trips/${params.companyId}/${trip.id}`}>
              <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{trip.datetime}</span>
                      <span>Driver: {trip.driver}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Destination: {trip.destination}</p>
                        <p>Vehicle: {trip.vehicle}</p>
                      </div>
                      <p className="text-blue-500">Status: {trip.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

