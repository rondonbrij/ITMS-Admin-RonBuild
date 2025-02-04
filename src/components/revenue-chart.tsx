"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", revenue: 40000 },
  { month: "Feb", revenue: 45000 },
  { month: "Mar", revenue: 42000 },
  { month: "Apr", revenue: 48000 },
  { month: "May", revenue: 46000 },
  { month: "Jun", revenue: 49000 },
  { month: "Jul", revenue: 52000 },
  { month: "Aug", revenue: 50000 },
  { month: "Sep", revenue: 48000 },
  { month: "Oct", revenue: 51000 },
  { month: "Nov", revenue: 49000 },
  { month: "Dec", revenue: 53000 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">₱48,574.21</div>
        <div className="text-sm text-muted-foreground mb-4">+20%</div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

