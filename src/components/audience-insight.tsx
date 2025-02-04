"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "Dec 25", male: 400, female: 240, other: 180 },
  { date: "Dec 26", male: 300, female: 440, other: 280 },
  { date: "Dec 27", male: 500, female: 340, other: 180 },
  { date: "Dec 28", male: 280, female: 440, other: 380 },
  { date: "Dec 29", male: 300, female: 340, other: 280 },
  { date: "Dec 30", male: 320, female: 240, other: 180 },
  { date: "Dec 31", male: 500, female: 440, other: 380 },
]

export function AudienceInsight() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audience Insight</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis fontSize={12} tickLine={false} axisLine={false} />
            <Bar dataKey="male" fill="#2563eb" radius={[4, 4, 0, 0]} />
            <Bar dataKey="female" fill="#7dd3fc" radius={[4, 4, 0, 0]} />
            <Bar dataKey="other" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

