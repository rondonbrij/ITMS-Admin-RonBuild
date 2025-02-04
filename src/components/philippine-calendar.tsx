"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const philippineHolidays = [
  { date: new Date(2025, 0, 1), name: "New Year's Day" },
  { date: new Date(2025, 3, 9), name: "Maundy Thursday" },
  { date: new Date(2025, 3, 10), name: "Good Friday" },
  { date: new Date(2025, 3, 11), name: "Black Saturday" },
  { date: new Date(2025, 4, 1), name: "Labor Day" },
  { date: new Date(2025, 5, 12), name: "Independence Day" },
  { date: new Date(2025, 7, 21), name: "Ninoy Aquino Day" },
  { date: new Date(2025, 7, 25), name: "National Heroes Day" },
  { date: new Date(2025, 10, 30), name: "Bonifacio Day" },
  { date: new Date(2025, 11, 24), name: "Christmas Eve" },
  { date: new Date(2025, 11, 25), name: "Christmas Day" },
  { date: new Date(2025, 11, 30), name: "Rizal Day" },
  { date: new Date(2025, 11, 31), name: "New Year's Eve" },
]

export function PhilippineCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const isHoliday = (date: Date) => {
    return philippineHolidays.some((holiday) => holiday.date.toDateString() === date.toDateString())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            holiday: (date) => isHoliday(date),
          }}
          modifiersStyles={{
            holiday: { color: "red", fontWeight: "bold" },
          }}
        />
        {date && isHoliday(date) && (
          <p className="mt-2 text-sm text-red-500">
            Holiday: {philippineHolidays.find((h) => h.date.toDateString() === date.toDateString())?.name}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

