"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Receipt, DollarSign, Building } from "lucide-react"

const metrics = [
  {
    title: "Total Bookings",
    value: "1,234.00",
    change: "+15%",
    icon: Receipt,
  },
  {
    title: "Total Passengers",
    value: "10,566",
    change: "+33%",
    icon: Users,
  },
  {
    title: "Special Pass Rev.",
    value: "₱958.00",
    change: "-5%",
    icon: DollarSign,
  },
  {
    title: "Terminal Fee Rev.",
    value: "₱5,566.01",
    change: "+15%",
    icon: Building,
  },
]

export function SummaryMetrics() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="daily">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className={`text-sm ${metric.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                  {metric.change}
                </p>
              </div>
              <metric.icon className="h-6 w-6 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

