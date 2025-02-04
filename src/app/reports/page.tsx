import { Card, CardContent } from "@/components/ui/card"
import { FileText, MessageSquare, AlertTriangle, ClipboardList } from "lucide-react"

const reports = [
  {
    title: "LTT DATA REPORT",
    icon: FileText,
  },
  {
    title: "CUSTOMER FEEDBACK REPORT",
    icon: MessageSquare,
  },
  {
    title: "VIOLATION REPORT",
    icon: AlertTriangle,
  },
  {
    title: "AUDIT LOG REPORT",
    icon: ClipboardList,
  },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Report Management</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {reports.map((report) => (
          <Card key={report.title} className="hover:bg-accent transition-colors cursor-pointer">
            <CardContent className="flex items-center justify-between p-6">
              <h2 className="text-lg font-semibold">{report.title}</h2>
              <report.icon className="h-6 w-6 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

